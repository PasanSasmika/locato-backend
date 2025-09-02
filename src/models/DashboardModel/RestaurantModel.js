import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Restaurant name is required."],
      trim: true,
    },
    cuisineTypes: [{ type: String, trim: true }], // e.g., ['Italian', 'Chinese', 'Sri Lankan']
    menuHighlights: {
      type: String, // Multi-line text for signature dishes
      trim: true,
    },
    priceRange: {
      type: String, // e.g., "LKR 1000-3000 per person"
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    deliveryPortals: [{ type: String, trim: true }], // e.g., ['Uber Eats', 'PickMe Food']
    photos: [{ type: String }], // Base64 or URLs for restaurant/dish photos
    contactInfo: {
      phone: { type: String, required: true, trim: true },
      email: { type: String, trim: true },
      socialMedia: { type: String, trim: true },
    },
    openingHours: {
      type: String, // e.g., "Mon-Sun 11AM-11PM"
      trim: true,
    },
    serviceMode: [{
      type: String,
      enum: ["Dine-in", "Takeaway", "Delivery"],
      trim: true,
    }],
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    description: {
      type: String,
      trim: true,
    },
    nextUpdateDate: {
      type: Date,
    },
    reservationAvailable: {
      type: Boolean,
      default: false,
    },
    dietaryOptions: [{ type: String, trim: true }], // e.g., ['Vegan', 'Gluten-Free', 'Halal']
    ambiance: {
      type: String, // e.g., "Casual", "Fine Dining", "Family-Friendly"
      trim: true,
    },
    parkingAvailable: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);

export default RestaurantModel;