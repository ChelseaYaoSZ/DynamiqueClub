const Program = require("../models/program");

//update one program
const updateProgram = async (req, res) => {
  const programLevel = req.level;
  try {
    const updatedProgram = await Program.findOneAndUpdate(
      { level: programLevel },
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

module.exports = { updateProgram };
