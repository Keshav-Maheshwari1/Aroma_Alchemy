import express from "express";
import cors from "cors";
import api from "./api.js";
import PerfumeService from "./services/perfumeService.js"; // Import CORS middleware

const app = express();
const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      "http://localhost:5173",
      "https://aroma-alchemy.vercel.app",
    ];

    // If origin is in the allowed list or is undefined (for tools like Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error("Not allowed by CORS")); // Block the request
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow only these HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
  credentials: true, // Allow credentials like cookies or auth headers
};

// Middleware setup
app.use(cors(corsOptions)); // Enable CORS with the specified options
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the API router
app.use("", api); // Updated to use API routes only

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error("Error occurred:", err.message); // Log the error for debugging
  res.status(500).json({ error: "An unexpected error occurred." });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
