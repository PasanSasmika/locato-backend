import mongoose from "mongoose";

// GeoJSON Point Schema for storing coordinates
const PointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    default: 'Point',
  },
  coordinates: {
    type: [Number], // [longitude, latitude]
    index: '2dsphere', // Important for geospatial queries (e.g., "find nearby")
  },
});

const TuitionSchema = new mongoose.Schema(
  {
    tutorName: {
      type: String,
      required: true,
      trim: true,
    },
    instituteName: {
      type: String,
      trim: true,
    },
    classType: { type: String, required: true },
    subjectStream: { type: String, required: true },
    subject: { type: String, required: true },
    teachingMode: { type: String, required: true },
    feeRange: { type: String, required: true },
    languageMedium: { type: String, required: true },
    location: {
      type: String,
      required: [true, "Location is required."],
    },
    contactInfo: {
      phone: { type: String, required: true },
      email: { type: String },
    },
    daysTimes: [
      {
        day: { type: String },
        time: { type: String },
      },
    ],
    images: [{ type: String }],
    description: { type: String, trim: true },
    nextUpdateDate: { type: Date },
    rating: { type: Number, min: 0, max: 5, default: 0 },
    reviews: [
      {
        reviewerName: { type: String },
        comment: { type: String },
        rating: { type: Number, min: 0, max: 5 },
        date: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const TuitionModel = mongoose.model("Tuition", TuitionSchema);

export default TuitionModel;