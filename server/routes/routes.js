// server/routes/routes.js

import express from "express";
import {
  createPerfume,
  getAllPerfumes,
  getPerfumeById,
  updatePerfumeById,
  deletePerfumeById,
} from "../controllers/perfumeController.js";

const router = express.Router();

// Define routes for CRUD operations
router
  .route("/perfumes")
  .post(createPerfume) // Create a new perfume
  .get(getAllPerfumes); // Get all perfumes

router
  .route("/perfumes/:id")
  .get(getPerfumeById) // Get a perfume by ID
  .put(updatePerfumeById) // Update a perfume by ID
  .delete(deletePerfumeById); // Delete a perfume by ID

export default router;
