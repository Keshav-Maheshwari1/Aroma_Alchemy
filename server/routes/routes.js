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
router.post("/perfumes", createPerfume);
router.get("/perfumes", getAllPerfumes);
router.get("/perfumes/:id", getPerfumeById);
router.put("/perfumes/:id", updatePerfumeById);
router.delete("/perfumes/:id", deletePerfumeById);

export default router;
