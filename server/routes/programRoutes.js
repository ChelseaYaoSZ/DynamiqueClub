import express from "express";
const router = express.Router();

import { getProgramById, updateProgram } from "../controller/program.js";

router.get("/:id", getProgramById);
router.patch("/:id", updateProgram);
// router.post("/", createProgram);

export default router;
