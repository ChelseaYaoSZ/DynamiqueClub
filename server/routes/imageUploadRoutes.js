import express from "express";
import multer from "multer";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "upload/images");
  },
  filename(req, file, cb) {
    cb(null, `${req.body.id}${path.extname(file.originalname)}`);
  },
});

const fileFilter = (req, file, cb) => {
  // Accept images only
  if (!file.originalname.match(/\.(png)$/)) {
    req.fileValidationError = "Only PNG files are allowed!";
    return cb(new Error("Only PNG files are allowed!"), false);
  }
  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post("/", upload.single("image"), (req, res) => {
  // Check for file validation error first
  if (req.fileValidationError) {
    return res.status(400).json({ success: false, message: req.fileValidationError });
  }

  // Ensure a file is actually provided
  if (!req.file) {
    return res.status(400).json({ success: false, message: "Please select an image to upload." });
  }

  // If file is uploaded successfully
  const imageURL = `upload/images/${req.file.filename}`;
  res.status(200).json({
    success: true,
    message: "Image uploaded successfully.",
    imageURL,
  });
});

export default router;
