// Import necessary modules and utilities
import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { deleteFromCloudinary, uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const options = {
    httpOnly: true, // Set the cookie to be accessible only by the web server.
    secure: true // Ensure the cookie is sent only over HTTPS.
};

// Function to generate access and refresh tokens for a user
const generateAccessAndRefreshTokens = async (userId) => {
    try {
        const user = await User.findById(userId); // Fetch the user from the database using their ID.
        const accessToken = user.generateAccessToken(); // Generate a new access token for the user.
        const refreshToken = user.generateRefreshToken(); // Generate a new refresh token for the user.

        user.refreshToken = refreshToken; // Update the user's refresh token in the database.
        await user.save({ validateBeforeSave: false }); // Save the user object without validating the fields.

        return { accessToken, refreshToken }; // Return the generated tokens.
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating access and refresh tokens"); // Handle errors by throwing a custom API error.
    }
};

// Function to handle user registration
const registerUser = asyncHandler(async (req, res) => {
    // Extract user details from the request body
    const { fullName, username, email, password } = req.body;

    // Validate that all required fields are provided
    if ([fullName, username, email, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required!!"); // Throw an error if any field is empty.
    }

    // Check if a user with the same username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
        throw new ApiError(409, "User with email or username already exists"); // Throw an error if user already exists.
    }

    // Retrieve the local path of the uploaded avatar image
    const avatarLocalPath = req.files?.avatar[0]?.path;

    // Ensure an avatar image is provided
    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required"); // Throw an error if avatar is missing.
    }

    // Upload avatar and cover image to Cloudinary
    const avatar = await uploadOnCloudinary(avatarLocalPath); // Upload avatar and get the URL.

    // Ensure the avatar upload was successful
    if (!avatar) {
        throw new ApiError(400, "Avatar file is required"); // Throw an error if avatar upload fails.
    }

    // Create a new user entry in the database
    const user = await User.create({
        fullName,
        username,
        email,
        avatar: {
            public_id: avatar.public_id, // Store the public ID of the uploaded avatar.
            url: avatar.url // Store the URL of the uploaded avatar.
        }, // Store the URL of the uploaded avatar.
        password, // Store the user's password (should be hashed in a real application).
    });

    // Fetch the created user without sensitive information
    const createdUser = await User.findById(user._id).select("-password -refreshToken");
    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user"); // Handle errors during user creation.
    }

    // Return a success response with the created user data
    return res.status(201).json(new ApiResponse(200, createdUser, "User  Registered Successfully"));
});

// Function to handle user login
const loginUser = asyncHandler(async (req, res) => {
    // Extract login details from the request body
    const { username, email, password } = req.body;

    // Validate that either username or email is provided
    if (!username && !email) {
        throw new ApiError(400, "Username or Email Required"); // Throw an error if neither is provided.
    }

    // Find the user based on username or email
    const user = await User.findOne({ $or: [{ username }, { email }] }); // Search for the user in the database using either username or email.

    if (!user) {
        throw new ApiError(404, "User does not exist"); // Throw an error if the user is not found.
    }

    const isPasswordValid = await user.isPasswordCorrect(password); // Check if the provided password matches the stored password.

    if (!isPasswordValid) {
        throw new ApiError(404, "Invalid user credentials"); // Throw an error if the password is incorrect.
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id); // Generate access and refresh tokens for the user.

    const loggedInUser = await User.findById(user._id) // Fetch the logged-in user without sensitive information.
        .select("-password -refreshToken");

    return await res // Send the response with cookies for access and refresh tokens.
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser, accessToken, refreshToken // Return user data along with tokens.
                },
                "User  logged in Successfully" // Success message.
            )
        );
});

// Function to handle user logout
const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate( // Update the user's refresh token to undefined to log them out.
        req.user._id,
        {
            $unset: {
                refreshToken: 1 // Remove the refresh token from the user document.
            }
        },
        {
            new: true // Return the updated user document.
        }
    );

    return res // Send the response confirming the user has logged out.
        .status(200)
        .clearCookie("accessToken", options) // Clear the access token cookie.
        .clearCookie("refreshToken", options) // Clear the refresh token cookie.
        .json(
            new ApiResponse(
                200, {}, "User  Logged Out" // Success message.
            )
        );
});

// Function to refresh access token
const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken; // Get the refresh token from cookies or request body.

    if (!incomingRefreshToken) {
        throw new ApiError(401, "Unauthorized Request"); // Throw an error if no refresh token is provided.
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET // Verify the refresh token using the secret.
        );

        const user = await User.findById(decodedToken?._id); // Find the user based on the decoded token.

        if (!user) {
            throw new ApiError(401, "Invalid Refresh Token"); // Throw an error if the user is not found.
        }

        if (incomingRefreshToken !== user.refreshToken) {
            throw new ApiError(401, "Refresh token is expired or used"); // Throw an error if the refresh token does not match.
        }

        const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id); // Generate new tokens.

        res
            .status(200)
            .cookie("accessToken", accessToken, options) // Set the new access token cookie.
            .cookie("refreshToken", refreshToken, options) // Set the new refresh token cookie.
            .json(
                new ApiResponse(
                    200,
                    { accessToken, refreshToken }, // Return the new tokens.
                    "Access Token Refreshed" // Success message.
                )
            );
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid Refresh token"); // Handle errors during token verification.
    }
});

// Function to change current password
const changeCurrentPassword = asyncHandler(async (req, res) => {
    // Extract old and new passwords from the request body
    const { oldPassword, newPassword } = req.body;

    // Find the user in the database using the user ID from the request
    const user = await User.findById(req.user?._id);

    // Verify if the old password provided by the user is correct
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

    // If the old password is incorrect, throw an error
    if (!isPasswordCorrect) {
        throw new ApiError(400, "Invalid Old Password");
    }

    // Update the user's password with the new password
    user.password = newPassword; // Note: In a real application, the new password should be hashed.
    await user.save({ validateBeforeSave: false }); // Save the updated user without validation.

    // Return a success response indicating the password change was successful
    return res
        .status(200)
        .json(new ApiResponse(
            200,
            {},
            "Password Changed Successfully"
        ));
});

const getCurrentUser = asyncHandler(async (req, res) => {
    // Return the current user's data
    return res
        .status(200)
        .json(new ApiResponse(
            200,
            req.user,
            "Current User Retrieved"
        ));
});

// Function to update account details of the current user
const updateAccountDetails = asyncHandler(async (req, res) => {
    // Extract the updated user details from the request body
    const { fullName, email } = req.body;

    // Validate that both fullName and email are provided
    if (!fullName || !email) {
        throw new ApiError(400, "All fields are required"); // Throw an error if any field is missing.
    }

    // Find the user in the database using the user ID from the request and update their details
    const user = await User.findByIdAndUpdate(
        req.user?._id, // Use the ID of the currently authenticated user
        {
            $set: {
                fullName, // Update the full name
                email // Update the email
            }
        },
        { new: true } // Return the updated user document
    ).select("-password -refreshToken"); // Exclude the password & refreshToken from the returned user data

    // Return a success response with the updated user data
    return res
        .status(200)
        .json(new ApiResponse(
            200,
            user, // Return the updated user information
            "Account Details Updated Successfully" // Success message
        ));
});

// Function to update the avatar of the current user
const updateAvatar = asyncHandler(async (req, res) => {
    // Extract the local path of the new avatar image from the request
    const avatarLocalPath = req.file?.path;

    // Validate that the avatar file is provided
    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is missing"); // Throw an error if the avatar is missing.
    }

    // Upload the new avatar image to Cloudinary and get the URL
    const avatar = await uploadOnCloudinary(avatarLocalPath);

    // Check if the upload was successful
    if (!avatar.url && !avatar.public_id) {
        throw new ApiError(400, "Error while uploading on cloudinary"); // Throw an error if the upload fails.
    }
    if (req.user.avatar.public_id) {
        // Call the deleteFromCloudinary function to delete the image
        const isDeleted = await deleteFromCloudinary(req?.user?.avatar?.public_id, { resource_type: "image" });

        // Check if the deletion was successful
        if (!isDeleted) {
            throw new ApiError(500, "Failed to delete image from Cloudinary");
        }
    }
    // Find the user in the database using the user ID from the request and update their avatar URL
    const user = await User.findByIdAndUpdate(
        req.user?._id, // Use the ID of the currently authenticated user
        {
            $set: {
                avatar
            }
        },
        { new: true } // Return the updated user document
    ).select("-password -refreshToken"); // Exclude the password & refreshToken from the returned user data

    // Return a success response with the updated user data
    return res
        .status(200)
        .json(new ApiResponse(
            200,
            user, // Return the updated user information
            "Avatar Updated Successfully" // Success message
        ));
});

// Function to update the cover image of the current user
const updateCoverImage = asyncHandler(async (req, res) => {
    // Extract the local path of the new cover image from the request
    const coverImageLocalPath = req.file?.path;

    // Validate that the cover image file is provided
    if (!coverImageLocalPath) {
        throw new ApiError(400, "Cover image file is missing"); // Throw an error if the cover image is missing.
    }

    // Upload the new cover image to Cloudinary and get the URL
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    // Check if the upload was successful
    if (!coverImage.url && !coverImage.public_id) {
        throw new ApiError(400, "Error while uploading on cloudinary"); // Throw an error if the upload fails.
    }

    if (req.user.coverImage.public_id) {
        // Call the deleteFromCloudinary function to delete the image
        const isDeleted = await deleteFromCloudinary(req?.user?.coverImage?.public_id, { resource_type: "image" });

        // Check if the deletion was successful
        if (!isDeleted) {
            throw new ApiError(500, "Failed to delete image from Cloudinary");
        }
    }

    // Find the user in the database using the user ID from the request and update their cover image URL
    const user = await User.findByIdAndUpdate(
        req.user?._id, // Use the ID of the currently authenticated user
        {
            $set: {
                coverImage
            }
        },
        { new: true } // Return the updated user document
    ).select("-password -refreshToken"); // Exclude the password & refreshToken from the returned user data

    // Return a success response with the updated user data
    return res
        .status(200)
        .json(new ApiResponse(
            200,
            user, // Return the updated user information
            "Cover Image Updated Successfully" // Success message
        ));
});

// Define a controller function to get a user's channel profile
const getUserChannelProfile = asyncHandler(async (req, res) => {
    const { username } = req.params;

    // Check if the username is provided and not empty
    if (!username?.trim()) {
        throw new ApiError(400, "Username is required");
    }

    // Aggregate query to find the user's channel profile
    const channel = await User.aggregate([
        {
            $match: { username: username?.toLowerCase() } // Match the username (case-insensitive)
        },
        {
            $lookup: {
                from: "subscriptions", // Lookup subscribers from the subscriptions collection
                localField: "_id",
                foreignField: "channel",
                as: "subscribers"
            }
        },
        {
            $lookup: {
                from: "subscriptions", // Lookup channels the user is subscribed to
                localField: "_id",
                foreignField: "subscriber",
                as: "subscribedTo"
            }
        },
        {
            $addFields: {
                subscribersCount: {
                    $size: "$subscribers" // Count the number of subscribers
                },
                subscribedToCount: {
                    $size: "$subscribedTo" // Count the number of channels the user is subscribed to
                },
                isSubscribed: {
                    $cond: {
                        if: { $in: [req.user?._id, "$subscribers.subscriber"] }, // Check if the current user is subscribed
                        then: true,
                        else: false
                    }
                }
            }
        },
        {
            $project: {
                _id: 1,
                fullName: 1,
                username: 1,
                email: 1,
                subscribersCount: 1,
                subscribedToCount: 1,
                avatar: 1,
                coverImage: 1,
                isSubscribed: 1
            }
        }
    ]);

    // Log the channel data for debugging
    // console.log(channel);

    // If no channel is found, throw a 404 error
    if (!channel?.length) {
        throw new ApiError(404, "Channel not found");
    }

    // Return the channel profile in the response
    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                channel[0],
                "Channel profile retrieved successfully"
            ));
});

const getWatchHistory = asyncHandler(async (req, res) => {
    const user = await User.aggregate([
        {
            $match: {
                _id: new mongoose.Types.ObjectId(req.user._id)
            }
        },
        {
            $lookup: {
                from: "videos",
                localField: "watchHistory",
                foreignField: "_id",
                as: "watchHistory",
                pipeline: [
                    {
                        $lookup: {
                            from: "users",
                            localField: "owner",
                            foreignField: "_id",
                            as: "owner",
                            pipeline: [
                                {
                                    $project: {
                                        fullName: 1,
                                        username: 1,
                                        avatar: 1
                                    }
                                }
                            ]
                        }
                    },
                    {
                        $addFields: {
                            owner: {
                                $first: "$owner"
                            }
                        }
                    }
                ]
            }
        }
    ]);

    return res
        .status(200)
        .json(new ApiResponse(
            200,
            user[0]?.watchHistory,
            "Watch History Retrieved Successfully"
        ));

});

export {
    changeCurrentPassword,
    getCurrentUser,
    getUserChannelProfile,
    getWatchHistory,
    loginUser,
    logoutUser,
    refreshAccessToken,
    registerUser,
    updateAccountDetails,
    updateCoverImage,
    updateAvatar
}; // Export the functions for use in other parts of the application.