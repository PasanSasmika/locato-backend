// models/Service.js
import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  serviceType: {
    type: String,
    required: true,
    enum: [
      'hospitals', 'labs', 'pharmacies', 'restaurants', 'saloons', 
      'spas', 'supermarkets', 'ayurveda', 'bridalMakeups', 'clothing',
      'private', 'electronics', 'fitnesscenter', 'hardware', 'homeRepairs'
    ]
  },
  name: {
    type: String,
    required: true
  },
  description: String,
  location: String,
  images: [String],
  contactNo: String,
  rating: {
    type: Number,
    default: 0
  },
  deliveryAvailable: Boolean,
  openNow: Boolean,
  emergencyServices: Boolean,
  priceRange: String,
  // Service-specific fields stored in details
  details: {
    type: Map,
    of: mongoose.Schema.Types.Mixed
  }
}, {
  timestamps: true
});

export default mongoose.model('Service', serviceSchema);