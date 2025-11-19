// Import the Cloudinary library and file system module
import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

// Configuration for Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Cloudinary cloud name from environment variables
    api_key: process.env.CLOUDINARY_API_KEY, // Cloudinary API key from environment variables
    api_secret: process.env.CLOUDINARY_API_SECRET // Cloudinary API secret from environment variables
});

// Function to upload a file to Cloudinary
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            console.log("Invalid file path provided.");
            return null;
        }

        // Upload the file on Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto" // Automatically detect the file type
        });

        // File has been uploaded successfully
        console.log("File is uploaded on Cloudinary ");

        // Delete the local file
        try {
            fs.unlinkSync(localFilePath); // Synchronously delete the local file
        } catch (error) {
            console.error("Error deleting the local file:", error);
        }

        return response; // Return the response of the uploaded file
    } catch (error) {
        console.error("Error uploading file to Cloudinary:", error);
        return null;
    }
}

// Function to delete a file from Cloudinary
const deleteFromCloudinary = async (publicId, { resource_type }) => {
    try {
        // Delete the file from Cloudinary using the public ID
        const response = await cloudinary.uploader.destroy(publicId, { resource_type });

        // Check if the deletion was successful
        if (response.result === "ok") {
            console.log("File deleted from Cloudinary");
            return true;
        } else {
            console.log("Failed to delete file from Cloudinary");
            return false;
        }
    } catch (error) {
        console.error("Error deleting file from Cloudinary:", error);
        return false;
    }
}

// Export the functions for use in other modules
export { deleteFromCloudinary, uploadOnCloudinary }