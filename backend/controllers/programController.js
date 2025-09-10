const Program = require("../models/Program");

// @desc    Get all programs
// @route   GET /api/programs
// @access  Public
const getPrograms = async (req, res) => {
    try {
        const { type, status, birth_year } = req.query;

        let filter = {};
        if (type) filter.type = type;
        if (status) filter.status = status;
        if (birth_year) filter["eligibility.birth_years"] = parseInt(birth_year);

        const programs = await Program.find(filter).sort({ created_at: -1 });
        res.json(programs);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// @desc    Get single program
// @route   GET /api/programs/:id
// @access  Public
const getProgram = async (req, res) => {
    try {
        const program = await Program.findById(req.params.id);
        if (!program) {
            return res.status(404).json({ message: "Program not found" });
        }
        res.json(program);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// @desc    Create new program
// @route   POST /api/programs
// @access  Private (Admin only)
const createProgram = async (req, res) => {
    try {
        const program = await Program.create({
            ...req.body,
            created_at: new Date(),
            updated_at: new Date(),
        });
        res.status(201).json(program);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// @desc    Update program
// @route   PUT /api/programs/:id
// @access  Private (Admin only)
const updateProgram = async (req, res) => {
    try {
        const program = await Program.findByIdAndUpdate(req.params.id, { ...req.body, updated_at: new Date() }, { new: true, runValidators: true });

        if (!program) {
            return res.status(404).json({ message: "Program not found" });
        }

        res.json(program);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// @desc    Delete program
// @route   DELETE /api/programs/:id
// @access  Private (Admin only)
const deleteProgram = async (req, res) => {
    try {
        const program = await Program.findByIdAndDelete(req.params.id);
        if (!program) {
            return res.status(404).json({ message: "Program not found" });
        }
        res.json({ message: "Program deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// @desc    Update enrollment count
// @route   PATCH /api/programs/:id/enrollment
// @access  Private
const updateEnrollment = async (req, res) => {
    try {
        const { action } = req.body; // "enroll" or "unenroll"
        const program = await Program.findById(req.params.id);

        if (!program) {
            return res.status(404).json({ message: "Program not found" });
        }

        if (action === "enroll") {
            if (program.capacity.current_enrolled >= program.capacity.max_participants) {
                return res.status(400).json({ message: "Program is full" });
            }
            program.capacity.current_enrolled += 1;
        } else if (action === "unenroll") {
            if (program.capacity.current_enrolled > 0) {
                program.capacity.current_enrolled -= 1;
            }
        }

        program.updated_at = new Date();
        await program.save();
        res.json(program);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = { getPrograms, getProgram, createProgram, updateProgram, deleteProgram, updateEnrollment };
