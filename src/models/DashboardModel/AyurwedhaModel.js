import mongoose from "mongoose";

const AyurvedaSchema = new mongoose.Schema(
  {
    centreName: {
      type: String,
      required: [true, "Centre name is required."],
      trim: true,
    },
    serviceInfo: {
      type: String,
      trim: true,
    },
    languages: [{ type: String, trim: true }],
    location: {
      type: String,
      required: [true, "Location is required."],
    },
    contactInfo: {
      phone: { type: String, required: [true, "Contact number is required."] },
      email: { type: String },
      website: { type: String },
    },
    openingHours: {
      type: String,
    },
    practitioners: [{ type: String, trim: true }],
    treatmentsOffered: [{ type: String, trim: true }],
    facilities: [{ type: String, trim: true }],
    priceRange: {
      type: String,
    },
    appointmentRequired: {
      type: Boolean,
      required: true,
      default: true,
    },
    emergencyCare: {
      type: Boolean,
      required: true,
      default: false,
    },
    specialPackages: [{ type: String, trim: true }],
    certifications: [{ type: String, trim: true }],
    images: [{ type: String }],
    nextUpdateDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

const AyurvedaModel = mongoose.model("Ayurveda", AyurvedaSchema);

export default AyurvedaModel;