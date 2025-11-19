// require('dotenv').config({ path: "./env" })

// import dotenv from "dotenv";
// Import and configure dotenv to load environment variables from a .env file
import 'dotenv/config';

// Import the function to connect to the database
import connectDB from "./db/index.js";

// Import the Express application
import { app } from './app.js';

// Connect to the database
connectDB()
    .then(() => {
        // Handle application errors
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        });

        // Start the server and listen on the specified port
        app.listen(process.env.PORT || 8000, () => {
            console.log(`evEntly Server is running at: http://localhost:${process.env.PORT || 8000}`);
        });
    })
    .catch((error) => {
        console.error("Failed to connect to the database:", error);
    });























// import express from "express"
// const app = express();

// ; (async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         console.log(`MongoDB connected !! DB HOST: ${connectionInstance}`);
//         app.on("error", (error) => {
//             console.log("ERROR: ", error);
//             throw error;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App listening on port ${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.log("ERROR: ", error);
//         throw error;
//     }
// })()