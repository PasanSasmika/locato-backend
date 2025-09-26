import mongoose from "mongoose";

const SpaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Spa name is required."],
      trim: true,
    },
    services: [{ type: String, trim: true }],
    genderServed: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Unisex"],
    },
    experience: {
      type: String,
    },
    certifiedTherapists: {
      type: Boolean,
      required: true,
      default: false,
    },
    serviceDuration: {
      type: String,
    },
    priceList: {
      type: String, // For a multi-line text block
    },
    facilities: [{ type: String, trim: true }],
    workingHours: {
      type: String,
    },
    bookingMethod: {
      type: String,
    },
    contactNo: {
      type: String,
      required: true,
    },
    // --- MODIFIED ---
    location: {
      type: String,
      required: [true, "Location is required."],
    },
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
    // --- END MODIFIED ---
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    reviews: [
        {
          reviewerName: { type: String },
          comment: { type: String },
          rating: { type: Number, min: 0, max: 5 },
          date: { type: Date, default: Date.now },
        },
    ],
    images: [{ type: String }],
    nextUpdateDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

const SpaModel = mongoose.model("Spa", SpaSchema);

export default SpaModel;