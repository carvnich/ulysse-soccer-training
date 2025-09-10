const mongoose = require("mongoose");

const programSchema = new mongoose.Schema(
    {
        // Basic program information
        name: { type: String, required: true },
        type: {
            type: String,
            required: true,
            enum: ["league", "development", "academy", "tryouts"],
        },
        status: {
            type: String,
            required: true,
            enum: ["active", "registration_open", "full", "completed", "cancelled"],
        },

        // Pricing
        cost: {
            amount: { type: Number, required: true },
            currency: { type: String, default: "CAD" },
            billing_type: {
                type: String,
                enum: ["total", "per_session", "full_program"],
                required: true,
            },
            additional_info: String,
        },

        // Age/eligibility requirements
        eligibility: {
            birth_years: [Number],
            age_range: String,
            skill_level: {
                type: String,
                enum: ["beginner", "intermediate", "competitive", "academy", "house_league"],
            },
        },

        // Schedule information
        schedule: {
            start_date: Date,
            end_date: Date,
            duration_weeks: Number,
            session_length: Number, // minutes
            day_of_week: String,
            time_slots: [String],
            frequency: String,
        },

        // Location details
        locations: [
            {
                name: { type: String, required: true },
                address: String,
                type: {
                    type: String,
                    enum: ["indoor", "outdoor"],
                },
                notes: String,
            },
        ],

        // Capacity management
        capacity: {
            max_participants: Number,
            current_enrolled: { type: Number, default: 0 },
            waitlist_count: { type: Number, default: 0 },
        },

        // Images (stored in project files)
        images: [String],

        // Special features and highlights
        features: [String],

        // Program description
        description: String,

        // Contact information
        contact: {
            email: String,
            phone: String,
            registration_url: String,
        },

        // For tryout/academy programs
        tryout_sessions: [
            {
                date: Date,
                time: String,
                location: String,
                age_group: String,
            },
        ],

        // Registration status
        registration: {
            status: {
                type: String,
                enum: ["open", "pre_registration", "closed", "tba"],
                default: "open",
            },
            deadline: Date,
            requirements: [String],
        },

        // Metadata
        season: String,
        organization: String,
    },
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    }
);

// Indexes for common queries
programSchema.index({ type: 1, status: 1 });
programSchema.index({ "eligibility.birth_years": 1 });
programSchema.index({ "schedule.start_date": 1 });

module.exports = mongoose.model("Program", programSchema);
