const express = require("express");
const { getPrograms, getProgram, createProgram, updateProgram, deleteProgram, updateEnrollment } = require("../controllers/programController");
const { protect, adminOnly } = require("../middlewares/authMiddleware");

const router = express.Router();

// Public routes
router.get("/", getPrograms);
router.get("/:id", getProgram);

// Protected routes (Admin only)
router.post("/", protect, adminOnly, createProgram);
router.put("/:id", protect, adminOnly, updateProgram);
router.delete("/:id", protect, adminOnly, deleteProgram);

// Protected routes (All authenticated users)
router.patch("/:id/enrollment", protect, updateEnrollment);

module.exports = router;
