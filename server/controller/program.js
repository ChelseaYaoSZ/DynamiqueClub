import Program from "../models/program.js";

//create Program
export const createProgram = async (req, res) => {
  try {
    const program = await Program.create(req.body);
    res.status(200).json(program);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

//get one Program
export const getProgramById = async (req, res) => {
  const programId = req.params.id;

  try {
    const program = await Program.find({ id: programId });

    if (!program) {
      res.status(404).json({ message: "Program not found" });
    }
    res.status(200).json(program);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get all Programs
export const getAllPrograms = async (req, res) => {
  const programs = await Program.find().sort({ createdAt: -1 });
  res.status(200).json(programs);
};
//update one program

export const updateProgram = async (req, res) => {
  const programId = req.params.id;
  try {
    const updatedProgram = await Program.findOneAndUpdate(
      { id: programId },
      {
        ...req.body,
      },
      { new: true }
    );

    if (!updatedProgram) {
      return res.status(404).json({ message: "Program not found" });
    }

    res.status(200).json(updatedProgram);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//delete a program with its mongodb _id
export const deleteProgram = async (req, res) => {
  const programId = req.params.id;
  try {
    const program = await Program.findByIdAndDelete(programId);
    if (!program) {
      res.status(400).json({ message: "Program not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
