import mongoose from "mongoose";

const SaloonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Saloon name is required."],
      trim: true,
    },
    genderServed: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Unisex"],
    },
    services: [{ type: String, trim: true }],
    priceList: {
      type: String, // For a multi-line text block of services and prices
    },
    workingDays: [{ type: String, trim: true }],
    appointmentNeeded: {
      type: Boolean,
      required: true,
      default: true,
    },
    walkInAllowed: {
      type: Boolean,
      required: true,
      default: false,
    },
    serviceModes: [{ type: String }], // e.g., ['At Saloon', 'Home Visits']
    contactInfo: {
      phone: { type: String, required: true },
      socialMedia: { type: String },
    },
    location: {
      type: String,
      required: true,
    },
    languages: [{ type: String, trim: true }],
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    images: [{ type: String }],
    nextUpdateDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

const SaloonModel = mongoose.model("Saloon", SaloonSchema);

export default SaloonModel;