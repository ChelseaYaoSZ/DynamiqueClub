import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
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

  // File path for verification
  const filePath = `upload/images/${req.file.filename}`;

  try {
    const stats = fs.statSync(filePath);
    if (!stats.isFile()) {
      throw new Error('File did not save correctly');
    }

    // Optionally, you can compare the timestamp with the updatedAt from the database
    const updatedAt = new Date(req.body.updatedAt); // Example: assuming you pass updatedAt in the request body
    const fileModifiedTime = stats.mtime;

    // Check if the file was modified after updatedAt
    if (fileModifiedTime.getTime() <= updatedAt.getTime()) {
        throw new Error('File was not updated correctly');
    }

    res.status(200).json({
      success: true,
      message: "Image uploaded and verified successfully",
      imageURL: `${filePath}`,
      lastModified: stats.mtime
    });
    
  } catch (error) {
    fs.unlinkSync(filePath); // Ensure to remove incomplete uploads
    res.status(500).json({ success: false, message: "Failed to upload and verify image", error: error.message });
  }
});

export default router;
