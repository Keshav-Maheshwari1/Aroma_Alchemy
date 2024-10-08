import express from "express";
import api from "./api.js"; // Adjusted import
import cors from "cors";
import PerfumeService from "./services/perfumeService.js"; // Import CORS middleware

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware setup
app.use(cors()); // Enable CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Use the API router
app.use("", api); // Update the route path

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error("Error occurred:", err.message); // Log the error for debugging
  res.status(500).json({ error: "An unexpected error occurred." });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
