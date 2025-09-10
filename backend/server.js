require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const programRoutes = require("./routes/programRoutes");

const app = express();

// Middleware to handle CORS
app.use(
    cors({
        // origin: [
        // 	process.env.FRONTEND_URL, // Your frontend
        // 	"http://localhost:3000",  // Local development
        // 	"http://localhost:5173",  // Vite dev server
        // ],
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/programs", programRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
