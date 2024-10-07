import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const MONGODB_URI=process.env.MONGODB_URI || "mongodb+srv://mrkeshav:keshavmaheshwari@cluster0.qvlon.mongodb.net/";

const storage = new GridFsStorage({
  url: MONGODB_URI,
  // Removed deprecated options
  file: (req, file) => {
    return {
      bucketName: "uploads", // Set bucket name for GridFS
      filename: `${Date.now()}_${file.originalname}`, // Custom filename
    };
  },
});

const upload = multer({ storage });

// Middleware to handle image uploads
const uploadImages = (req, res, next) => {
  upload.array("images", 5)(req, res, (err) => {
    if (err) {
      return res.status(400).json({ message: "Error uploading files", error: err });
    }
    next();
  });
};

export { uploadImages };
