import mongoose from "mongoose";

const TuitionSchema = new mongoose.Schema(
  {
    tutorName: {
      type: String,
      required: [true, "Tutor name is required."],
      trim: true,
    },
    institute: {
      name: { type: String, trim: true },
      operationalDatesTimes: { type: String, trim: true }, // e.g., "Mon-Fri 9AM-5PM, Closed on holidays"
    },
    classType: {
      type: String,
      required: true,
      enum: ["Group", "Individual", "Hybrid"],
      default: "Group",
    },
    subjectStream: [{ type: String, trim: true }], // e.g., ['Science', 'Commerce', 'Arts']
    subject: [{ type: String, trim: true }], // e.g., ['Mathematics', 'Physics']
    teachingMode: {
      type: String,
      required: true,
      enum: ["Online", "In-Person", "Hybrid"],
      default: "In-Person",
    },
    feeRange: {
      type: String, // e.g., "LKR 1000-2000 per session"
      trim: true,
    },
    languageMedium: [{ type: String, trim: true }], // e.g., ['English', 'Sinhala']
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
    daysTimes: {
      type: String, // e.g., "Mon, Wed, Fri 4PM-6PM"
      trim: true,
    },
    images: [{ type: String }], // Base64 or URLs for tutor/class photos
    description: {
      type: String,
      trim: true,
    },
    nextUpdateDate: {
      type: Date,
    },
    reviews: {
      type: String, // e.g., "4.5/5 based on 20 reviews"
      trim: true,
    },
    classDuration: {
      type: String, // e.g., "1 hour"
      trim: true,
    },
    tutorQualifications: {
      type: String, // e.g., "BSc in Mathematics, 5 years teaching experience"
      trim: true,
    },
    enrollmentProcess: {
      type: String, // e.g., "Contact via phone or online form"
      trim: true,
    },
    maxStudents: {
      type: Number,
      min: 1,
      default: 1,
    },
    availabilityStatus: {
      type: String, // e.g., "Open for Enrollment", "Waitlist"
      trim: true,
    },
  },
  { timestamps: true }
);

const TuitionModel = mongoose.model("Tuition", TuitionSchema);

export default TuitionModel;
