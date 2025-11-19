// Import the multer library for handling file uploads
import multer from "multer";

// Configure storage settings for multer
const storage = multer.diskStorage({
    // Set the destination directory for uploaded files
    destination: function (req, file, cb) {
        cb(null, "./public/temp"); // Save files to the "public/temp" directory
    },
    // Set the filename for uploaded files
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});

// Create a multer instance with the configured storage settings
export const upload = multer({
    storage,
});