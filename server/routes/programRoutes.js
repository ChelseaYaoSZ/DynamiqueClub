import express from "express";
const router = express.Router();

// Endpoints for program
router.route("/").get((req, res) => {
  res.send("Program service is running");
});

import {
  getProgramById,
  updateProgram,
  createProgram,
} from "../controller/program.js";

router.get("/:id", getProgramById);
router.patch("/:id", updateProgram);
router.post("/", createProgram);

export default router;
