import mongoose from "mongoose";

const PharmacySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Pharmacy name is required."],
      trim: true,
    },
    openHours: {
      type: String,
    },
    service247: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveryAvailable: {
      type: Boolean,
      required: true,
      default: false,
    },
    contactNo: {
      type: String,
      required: [true, "Contact number is required."],
    },
    location: {
      type: String,
      required: [true, "Location is required."],
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
    nextUpdateDate: {
      type: Date,
    },
    images: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const PharmacyModel = mongoose.model("Pharmacy", PharmacySchema);

export default PharmacyModel;