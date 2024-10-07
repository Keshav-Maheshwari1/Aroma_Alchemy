import mongoose from "mongoose";
const PerfumeStore = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  quantity: Number,
  category: String,
  sizes: [String],
  imageIds: [mongoose.Schema.Types.ObjectId], // Storing GridFS image file IDs
});
const PerfumeModel = mongoose.model("perfume", PerfumeStore, "Perfumes");
export default PerfumeModel;
