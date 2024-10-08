import mongoose from "mongoose";

const PerfumeStore = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // Title is required
    },
    description: {
      type: String,
      required: true, // Description is required
    },
    price: {
      type: Number,
      required: true, // Price is required
      min: 0, // Ensure price is a positive number
    },
    quantity: {
      type: Number,
      default: 0, // Default quantity is 0
    },
    category: {
      type: String,
      required: true, // Category is required
    },
    sizes: {
      type: [String],
      required: true, // Sizes are required
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

const PerfumeModel = mongoose.model("Perfume", PerfumeStore, "Perfumes");
export default PerfumeModel;
