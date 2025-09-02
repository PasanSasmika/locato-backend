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
    paymentMethods: [{ type: String, trim: true }], // e.g., ['Cash', 'Credit Card', 'Mobile Payments']
    areasCovered: [{ type: String, trim: true }], // e.g., ['Colombo', 'Kandy']
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    categoriesAvailable: [{ type: String, trim: true }], // e.g., ['Fresh Produce', 'Dairy', 'Bakery']
    parkingAvailable: {
      type: Boolean,
      default: false,
    },
    offersAvailable: {
      type: String, // Multi-line text for current offers
      trim: true,
    },
    is24HourOpen: {
      type: Boolean,
      default: false,
    },
    membershipDiscount: {
      type: String, // e.g., "10% off for members"
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
    images: [{ type: String }], // Base64 or URLs for store photos
    storeHours: {
      type: String, // e.g., "Mon-Sun 8AM-10PM"
      trim: true,
    },
    loyaltyProgram: {
      type: String, // Details of loyalty program
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