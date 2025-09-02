import mongoose from "mongoose";

const ClothingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Store name is required."],
      trim: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["Casual", "Formal", "Sportswear", "Ethnic", "Designer", "Other"],
      default: "Casual",
    },
    style: [{ type: String, trim: true }], // e.g., ['Bohemian', 'Minimalist', 'Streetwear']
    priceRanges: {
      type: String, // e.g., "LKR 1000-5000, LKR 5000-15000"
      trim: true,
    },
    sizes: [{ type: String, trim: true }], // e.g., ['S', 'M', 'L', 'XL']
    offers: {
      type: String, // Multi-line text for current offers
      trim: true,
    },
    ratings: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    openHours: {
      type: String, // e.g., "Mon-Sat 10AM-8PM, Sun 11AM-6PM"
      trim: true,
    },
    areasCovered: [{ type: String, trim: true }], // e.g., ['Colombo', 'Kandy']
    description: {
      type: String,
      trim: true,
    },
    images: [{ type: String }], // Base64 or URLs for store/product photos
    contactInfo: {
      phone: { type: String, required: true, trim: true },
      email: { type: String, trim: true },
      socialMedia: { type: String, trim: true },
    },
    nextUpdateDate: {
      type: Date,
    },
    brandOfferings: [{ type: String, trim: true }], // e.g., ['Nike', 'Zara', 'H&M']
    returnPolicy: {
      type: String, // e.g., "30-day return with receipt"
      trim: true,
    },
    onlineShopping: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const ClothingModel = mongoose.model("Clothing", ClothingSchema);

export default ClothingModel;