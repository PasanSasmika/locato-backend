import mongoose from "mongoose";

const HardwareSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Store name is required."],
      trim: true,
    },
    categories: [{ type: String, trim: true }], // e.g., ['Tools', 'Electrical', 'Plumbing']
    brandList: [{ type: String, trim: true }], // e.g., ['Bosch', 'Makita', 'Stanley']
    deliveryInfo: {
      type: String, // e.g., "Free delivery within 5km, LKR 500 beyond"
      trim: true,
    },
    contactInfo: {
      phone: { type: String, required: true, trim: true },
      email: { type: String, trim: true },
      socialMedia: { type: String, trim: true },
    },
    photos: [{ type: String }], // Base64 or URLs for store/product photos
    stockStatus: {
      type: String, // e.g., "In Stock", "Limited Stock", "Out of Stock"
      trim: true,
    },
    openingHours: {
      type: String, // e.g., "Mon-Sat 8AM-6PM, Sun 9AM-4PM"
      trim: true,
    },
    discounts: {
      type: String, // e.g., "10% off on tools this month"
      trim: true,
    },
    priceInfo: {
      type: String, // e.g., "Tools: LKR 1000-10000, Paint: LKR 500-5000"
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    nextUpdateDate: {
      type: Date,
    },
    warrantyInfo: {
      type: String, // e.g., "1-year warranty on power tools"
      trim: true,
    },
    returnPolicy: {
      type: String, // e.g., "15-day return with receipt"
      trim: true,
    },
    onlineOrdering: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const HardwareModel = mongoose.model("Hardware", HardwareSchema);

export default HardwareModel;