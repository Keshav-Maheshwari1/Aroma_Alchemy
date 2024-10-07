import express from "express";
import routes from "./routes/routes.js"; // Ensure correct path
import mongoose from "mongoose";
import gridfsStream from "gridfs-stream";
import { uploadImages } from "./middleware.js"; // Import the middleware

const router = express.Router();
const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://mrkeshav:keshavmaheshwari@cluster0.qvlon.mongodb.net/";
let gfs;

// Initialize GridFS stream
const conn = mongoose.createConnection(MONGODB_URI);
conn.once("open", () => {
  gfs = gridfsStream(conn.db, mongoose.mongo);
  gfs.collection("uploads");
  console.log("MongoDB connection established");
});
conn.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Route to upload images
router.post("/upload", uploadImages, (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: "No files were uploaded." });
  }
  res
    .status(200)
    .json({ message: "Files uploaded successfully.", files: req.files });
});

// Use defined routes
router.use("/api", routes); // Make sure the path is correct

export default router;
