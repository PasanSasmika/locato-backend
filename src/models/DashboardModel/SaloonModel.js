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
      type: String,
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
    serviceModes: [{ type: String }],
    contactInfo: {
      phone: { type: String, required: true },
      socialMedia: { type: String },
    },
    location: {
      type: String,
      required: true,
    },
    // --- ADDED ---
    coordinates: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
        default: 'Point'
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        required: true,
      },
    },
    // --- END ADDED ---
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