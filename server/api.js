import express from "express";
import routes from "./routes/routes.js"; // Ensure correct path
import mongoose from "mongoose";
import { GridFSBucket } from "mongodb"; // Use GridFSBucket for file storage
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const router = express.Router();

// Fallback MongoDB URI if not provided in the environment
const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://mrkeshav:keshavmaheshwari@cluster0.qvlon.mongodb.net/perfumeDB";

// Initialize GridFS stream variable
let gfs;

// MongoDB connection
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");

    // Set up GridFS bucket after successful connection
    const db = mongoose.connection.db;
    gfs = new GridFSBucket(db, {
      bucketName: "uploads", // Set bucket name (or customize as needed)
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
router.use("/api", routes); // Ensure routes are properly defined in routes.js

export default router;
