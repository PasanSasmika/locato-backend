import mongoose from "mongoose";

const BridalMakeupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Artist/Service name is required."],
      trim: true,
    },
    services: [{ type: String, trim: true }], // e.g., ['Bridal Makeup', 'Hair Styling', 'Saree Draping']
    packages: {
      type: String, // Multi-line text for package details
      trim: true,
    },
    prices: {
      type: String, // Multi-line text for pricing details
      trim: true,
    },
    advanceReceived: {
      type: Number,
      min: 0,
      default: 0,
    },
    serviceMode: [{ type: String, trim: true }], // e.g., ['At Studio', 'On Location', 'Home Visits']
    experience: {
      type: Number,
      min: 0,
      default: 0,
    },
    availableForWedding: {
      type: Boolean,
      required: true,
      default: true,
    },
    samples: [{ type: String, trim: true }], // URLs or descriptions of sample work
    availabilityDate: [{
      type: Date,
    }],
    contactInfo: {
      phone: { type: String, required: true, trim: true },
      email: { type: String, trim: true },
      socialMedia: { type: String, trim: true },
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    photos: [{ type: String }], // Base64 or URLs for portfolio photos
    genderServed: {
      type: String,
      required: true,
      enum: ["Female", "Unisex"],
      default: "Female",
    },
    review: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    nextUpdateDate: {
      type: Date,
    },
    certifications: [{ type: String, trim: true }], // e.g., ['Certified Makeup Artist', 'Hair Styling Diploma']
    portfolioLink: {
      type: String,
      trim: true,
    },
    travelAvailability: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const BridalMakeupModel = mongoose.model("BridalMakeup", BridalMakeupSchema);

export default BridalMakeupModel;