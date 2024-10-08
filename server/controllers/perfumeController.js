// server/controllers/perfumeController.js

import PerfumeService from "../services/perfumeService.js"; // Import all functions from the service

/**
 * Create a new perfume entry.
 * @param {Object} req - The request object containing the perfume details and files.
 * @param {Object} res - The response object to send the result.
 */
export const createPerfume = async (req, res) => {
  try {
    console.log(req.body); // Log the request body for debugging
    const { title, description, price, quantity, category, sizes } = req.body;

    // Ensure files exist before mapping to get IDs
    const imageIds = req.files ? req.files.map((file) => file.id) : []; // Get IDs of uploaded images

    const newPerfume = await PerfumeService.createPerfume(
      { title, description, price, quantity, category, sizes },
      imageIds
    );
    res.status(201).json(newPerfume); // Respond with the created perfume
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle any errors
  }
};

/**
 * Get all perfumes.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const getAllPerfumes = async (req, res) => {
  try {
    console.log("Reaching here "); // Debug log to track flow
    const perfumes = await PerfumeService.getAllPerfumes(); // Fetch all perfumes from service
    res.status(200).json(perfumes); // Respond with the list of perfumes
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle any errors
  }
};

/**
 * Get a perfume by ID.
 * @param {Object} req - The request object containing the perfume ID.
 * @param {Object} res - The response object.
 */
export const getPerfumeById = async (req, res) => {
  try {
    const perfume = await PerfumeService.getPerfumeById(req.params.id); // Fetch perfume by ID
    if (!perfume) return res.status(404).json({ message: "Perfume not found" });
    res.status(200).json(perfume); // Respond with the perfume details
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle any errors
  }
};

/**
 * Update a perfume by ID.
 * @param {Object} req - The request object containing the perfume ID and updated details.
 * @param {Object} res - The response object.
 */
export const updatePerfumeById = async (req, res) => {
  try {
    const { title, description, price, quantity, category, sizes } = req.body;

    // Ensure files exist before mapping to get IDs
    const imageIds = req.files ? req.files.map((file) => file.id) : [];

    const updatedPerfume = await PerfumeService.updatePerfume(
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
    res.status(200).json(updatedPerfume); // Respond with the updated perfume
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle any errors
  }
};

/**
 * Delete a perfume by ID.
 * @param {Object} req - The request object containing the perfume ID.
 * @param {Object} res - The response object.
 */
export const deletePerfumeById = async (req, res) => {
  try {
    const deletedPerfume = await PerfumeService.deletePerfume(
      req.params.id
    ); // Delete perfume by ID
    if (!deletedPerfume)
      return res.status(404).json({ message: "Perfume not found" });

    // Optionally delete associated images from GridFS if needed
    res.status(204).send(); // Send a no-content response
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle any errors
  }
};
