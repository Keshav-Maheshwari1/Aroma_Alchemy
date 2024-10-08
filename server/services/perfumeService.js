// server/services/perfumeService.js

import PerfumeModel from "../models/perfumestore.js";

class PerfumeService {
  /**
   * Get all perfumes.
   * @returns {Promise<Array>} - List of all perfumes.
   */
  static async getAllPerfumes() {
    try {
      console.log("Fetching all perfumes...");
      const perfumes = await PerfumeModel.find();
      return perfumes;
    } catch (error) {
      console.error("Error fetching perfumes:", error); // Log the error
      throw new Error("Error fetching perfumes: " + error.message);
    }
  }

  /**
   * Create a new perfume.
   * @param {Object} perfumeData - Data for the new perfume.
   * @returns {Promise<Object>} - The created perfume.
   */
  static async createPerfume(perfumeData) {
    try {
      const newPerfume = new PerfumeModel(perfumeData);
      return await newPerfume.save();
    } catch (error) {
      throw new Error("Error creating perfume: " + error.message);
    }
  }

  /**
   * Get a perfume by ID.
   * @param {String} id - ID of the perfume.
   * @returns {Promise<Object|null>} - The perfume object or null if not found.
   */
  static async getPerfumeById(id) {
    try {
      return await PerfumeModel.findById(id);
    } catch (error) {
      throw new Error("Error fetching perfume by ID: " + error.message);
    }
  }

  /**
   * Update a perfume by ID.
   * @param {String} id - ID of the perfume.
   * @param {Object} updateData - Data to update the perfume.
   * @returns {Promise<Object|null>} - The updated perfume object or null if not found.
   */
  static async updatePerfume(id, updateData) {
    try {
      return await PerfumeModel.findByIdAndUpdate(id, updateData, {
        new: true,
      });
    } catch (error) {
      throw new Error("Error updating perfume: " + error.message);
    }
  }

  /**
   * Delete a perfume by ID.
   * @param {String} id - ID of the perfume.
   * @returns {Promise<Object|null>} - The deleted perfume object or null if not found.
   */
  static async deletePerfume(id) {
    try {
      return await PerfumeModel.findByIdAndDelete(id);
    } catch (error) {
      throw new Error("Error deleting perfume: " + error.message);
    }
  }
}

export default PerfumeService;
