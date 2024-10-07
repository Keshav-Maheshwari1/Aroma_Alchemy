// server/controllers/perfumeController.js

import * as perfumeService from "../services/perfumeService.js"; // Import all functions from the service

export const createPerfume = async (req, res) => {
  try {
    const { title, description, price, quantity, category, sizes } = req.body;
    const imageIds = req.files.map((file) => file.id); // Get IDs of uploaded images
    const newPerfume = await perfumeService.createPerfume(
      { title, description, price, quantity, category, sizes },
      imageIds
    );
    res.status(201).json(newPerfume);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllPerfumes = async (req, res) => {
  try {
    const perfumes = await perfumeService.getAllPerfumes();
    res.status(200).json(perfumes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPerfumeById = async (req, res) => {
  try {
    const perfume = await perfumeService.getPerfumeById(req.params.id);
    if (!perfume) return res.status(404).json({ message: "Perfume not found" });
    res.status(200).json(perfume);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePerfumeById = async (req, res) => {
  try {
    const { title, description, price, quantity, category, sizes } = req.body;
    const imageIds = req.files.map((file) => file.id);
    const updatedPerfume = await perfumeService.updatePerfumeById(
      req.params.id,
      {
        title,
        description,
        price,
        quantity,
        category,
        sizes,
        imageIds,
      }
    );
    if (!updatedPerfume)
      return res.status(404).json({ message: "Perfume not found" });
    res.status(200).json(updatedPerfume);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePerfumeById = async (req, res) => {
  try {
    const deletedPerfume = await perfumeService.deletePerfumeById(
      req.params.id
    );
    if (!deletedPerfume)
      return res.status(404).json({ message: "Perfume not found" });

    // Optionally delete associated images from GridFS if needed

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
