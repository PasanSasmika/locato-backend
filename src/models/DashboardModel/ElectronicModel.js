import mongoose from "mongoose";

const ElectronicsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Store name is required."],
      trim: true,
    },
    productsSold: [{ type: String, trim: true }], // e.g., ['Smartphones', 'Laptops', 'Home Appliances']
    servicesOffered: [{ type: String, trim: true }], // e.g., ['Repairs', 'Installation', 'Consultation']
    warrantyInfo: {
      type: String, // e.g., "1-year warranty on smartphones"
      trim: true,
    },
    brandPurchases: [{ type: String, trim: true }], // e.g., ['Samsung', 'Apple', 'Sony']
    location: {
      type: String,
      required: true,
      trim: true,
    },
    contactInfo: {
      phone: { type: String, required: true, trim: true },
      email: { type: String, trim: true },
      socialMedia: { type: String, trim: true },
    },
    openingHours: {
      type: String, // e.g., "Mon-Sat 9AM-7PM, Sun 10AM-5PM"
      trim: true,
    },
    photos: [{ type: String }], // Base64 or URLs for store/product photos
    nextUpdateDate: {
      type: Date,
    },
    deliveryOptions: {
      type: String, // e.g., "Free delivery within 10km, LKR 500 beyond"
      trim: true,
    },
    repairServices: {
      type: Boolean,
      default: false,
    },
    customerSupportAvailability: {
      type: String, // e.g., "24/7 phone support"
      trim: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    onlineShopping: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const ElectronicsModel = mongoose.model("Electronics", ElectronicsSchema);

export default ElectronicsModel;