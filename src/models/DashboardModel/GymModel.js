import mongoose from "mongoose";

const GymSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Gym name is required."],
      trim: true,
    },
    services: [{ type: String, trim: true }], // e.g., ['Cardio', 'Strength Training', 'Yoga']
    trainersAvailable: [{ type: String, trim: true }], // Names or specialties of trainers
    membershipPlans: {
      type: String, // Multi-line text for plan details and prices
      trim: true,
    },
    facilities: [{ type: String, trim: true }], // e.g., ['Sauna', 'Pool', 'Locker Room']
    ladiesTime: {
      type: String, // e.g., "Mon-Fri 10AM-12PM"
      trim: true,
    },
    operatingHours: {
      type: String, // e.g., "Mon-Fri 6AM-10PM, Sat-Sun 8AM-8PM"
      trim: true,
    },
    capacity: {
      type: Number, // Maximum number of members allowed at a time
      min: 0,
    },
    contactInfo: {
      phone: { type: String, required: true, trim: true },
      socialMedia: { type: String, trim: true },
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    images: [{ type: String }], // Base64 or URLs for gym photos
    nextUpdateDate: {
      type: Date,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

const GymModel = mongoose.model("Gym", GymSchema);

export default GymModel;