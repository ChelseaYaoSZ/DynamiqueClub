import express from "express";
const router = express.Router();

// Endpoints for program
router.route("/").get((req, res) => {
  res.send("Program service is running");
});

import {
  getAllPrograms,
  getProgramById,
  updateProgram,
  createProgram,
  deleteProgram,
} from "../controller/program.js";

router.get("/all", getAllPrograms);
router.get("/:id", getProgramById);
router.patch("/:id", updateProgram);
router.post("/", createProgram);
router.delete("/:id", deleteProgram);

export default router;
