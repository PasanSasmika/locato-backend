import mongoose from "mongoose";

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
    classType: {
      type: String, // e.g. "Group", "Individual"
      required: true,
    },
    subjectStream: {
      type: String, // e.g. "Science", "Commerce", "Arts"
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    teachingMode: {
      type: String, // e.g. "Online", "Physical", "Hybrid"
      required: true,
    },
    feeRange: {
      type: String, // e.g. "2000-4000 LKR"
      required: true,
    },
    daysTimes: [
      {
        day: { type: String }, // e.g. "Monday"
        time: { type: String }, // e.g. "5PM - 7PM"
      },
    ],
    languageMedium: {
      type: String, // e.g. "English", "Sinhala", "Tamil", "Bilingual"
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    contactInfo: {
      phone: { type: String, required: true },
      email: { type: String },
    },
    images: [
      {
        type: String, // store image URLs or file paths
      },
    ],
    description: {
      type: String,
      trim: true,
    },
    nextUpdateDate: {
      type: Date,
    },
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
  },
  { timestamps: true }
);

const TuitionModel = mongoose.model("Tuition", TuitionSchema);

export default TuitionModel;
