// Import necessary modules
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Create an Express application
const app = express();

// Enable CORS with specific origin and credentials support
app.use(cors(
    {
        origin: process.env.CLIENT_URL || "http://localhost:5173",
        credentials: true,
    }
));

// Parse incoming JSON requests with a limit of 16kb
app.use(express.json({ limit: "16kb" }));

// Parse URL-encoded data with a limit of 16kb
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Serve static files from the "public" directory
app.use(express.static("public"));

// Parse cookies from incoming requests
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js";
import healthCheckRouter from "./routes/healthCheck.routes.js";

//routes declaration
app.use("/api/v1/healthCheck", healthCheckRouter);
app.use("/api/v1/users", userRouter);

// Global Error Handler Middleware (add this after all route declarations!)
app.use((err, req, res, next) => {
    // Default values if not set in error
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    // You may want to log err for debugging: console.error(err);

    res.status(statusCode).json({
        success: false,
        message,
        statusCode,
        errors: err.errors || [],
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined, // Only send stack in dev
    });
});


// Export the Express application
export { app };