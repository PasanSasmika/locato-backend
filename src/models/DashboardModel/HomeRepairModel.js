import mongoose from "mongoose";

const HomeRepairSchema = new mongoose.Schema(
  {
    serviceName: {
      type: String,
      required: [true, "Service name is required."],
      trim: true,
    },
    subcategory: {
      type: String,
      required: true,
      enum: ["Plumbing", "Electrical", "Carpentry", "Painting", "Masonry", "HVAC", "Other"],
      default: "Other",
    },
    typeOfWorks: [{ type: String, trim: true }], // e.g., ['Pipe Repair', 'Wiring', 'Furniture Assembly']
    experiences: {
      type: Number,
      min: 0,
      default: 0,
    },
    pricingMethod: {
      type: String,
      required: true,
      enum: ["Hourly", "Fixed", "Per Project"],
    },
    approximateFee: {
      type: Number,
      min: 0,
      default: 0,
    },
    availability: [{
      type: String,
      trim: true,
    }], // e.g., ['Monday 9AM-5PM', 'Tuesday 9AM-5PM']
    areaCovered: [{ type: String, trim: true }], // e.g., ['Colombo', 'Gampaha']
    contactInfo: {
      phone: { type: String, required: true, trim: true },
      email: { type: String, trim: true },
      socialMedia: { type: String, trim: true },
    },
    photos: [{ type: String }], // Base64 or URLs for work photos
    languagesSpoken: [{ type: String, trim: true }], // e.g., ['English', 'Sinhala', 'Tamil']
    review: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    description: {
      type: String,
      trim: true,
    },
    nextUpdateDate: {
      type: Date,
    },
    is24HourAvailable: {
      type: Boolean,
      default: false,
    },
    toolsProvided: {
      type: Boolean,
      default: true,
    },
    certifications: [{ type: String, trim: true }], // e.g., ['Certified Electrician', 'Plumbing License']
    warrantyOffered: {
      type: String, // e.g., "6 months on labor"
      trim: true,
    },
  },
  { timestamps: true }
);

const HomeRepairModel = mongoose.model("HomeRepair", HomeRepairSchema);

export default HomeRepairModel;