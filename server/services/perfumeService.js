import PerfumeModel from "../models/perfumestore.js";

class PerfumeService {
  /**
   * Get all perfumes
   */
  static async getAllPerfumes() {
    return await PerfumeModel.find();
  }

  /**
   * Create a new perfume
   * @param {Object} perfumeData - Data for the new perfume
   */
  static async createPerfume(perfumeData) {
    const newPerfume = new PerfumeModel(perfumeData);
    return await newPerfume.save();
  }

  /**
   * Get a perfume by ID
   * @param {String} id - ID of the perfume
   */
  static async getPerfumeById(id) {
    return await PerfumeModel.findById(id);
  }

  /**
   * Update a perfume by ID
   * @param {String} id - ID of the perfume
   * @param {Object} updateData - Data to update the perfume
   */
  static async updatePerfume(id, updateData) {
    return await PerfumeModel.findByIdAndUpdate(id, updateData, { new: true });
  }

  /**
   * Delete a perfume by ID
   * @param {String} id - ID of the perfume
   */
  static async deletePerfume(id) {
    return await PerfumeModel.findByIdAndDelete(id);
  }
}

export default PerfumeService;
