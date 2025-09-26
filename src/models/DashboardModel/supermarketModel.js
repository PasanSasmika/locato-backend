import mongoose from "mongoose";

const SupermarketSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Supermarket name is required."],
      trim: true,
    },
    storeType: {
      type: String,
      required: true,
      enum: ["Grocery", "Hypermarket", "Convenience", "Specialty", "Other"],
      default: "Grocery",
    },
    isOpenNow: {
      type: Boolean,
      default: false,
    },
    deliveryAvailable: {
      type: Boolean,
      default: false,
    },
    paymentMethods: [{ type: String, trim: true }],
    areasCovered: [{ type: String, trim: true }],
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    categoriesAvailable: [{ type: String, trim: true }],
    parkingAvailable: {
      type: Boolean,
      default: false,
    },
    offersAvailable: {
      type: String,
      trim: true,
    },
    is24HourOpen: {
      type: Boolean,
      default: false,
    },
    membershipDiscount: {
      type: String,
      trim: true,
    },
    contactInfo: {
      phone: { type: String, required: true, trim: true },
      email: { type: String, trim: true },
      socialMedia: { type: String, trim: true },
    },
    description: {
      type: String,
      trim: true,
    },
    nextUpdateDate: {
      type: Date,
    },
    location: {
      type: String,
      required: true,
      trim: true,
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
    images: [{ type: String }],
    storeHours: {
      type: String,
      trim: true,
    },
    loyaltyProgram: {
      type: String,
      trim: true,
    },
    onlineOrdering: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const SupermarketModel = mongoose.model("Supermarket", SupermarketSchema);

export default SupermarketModel;