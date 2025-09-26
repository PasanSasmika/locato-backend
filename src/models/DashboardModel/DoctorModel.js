import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Doctor name is required."],
      trim: true,
    },
    specialty: {
      type: String,
      required: [true, "Specialty is required."],
      trim: true,
    },
    contactInfo: {
      type: String,
      required: [true, "Contact/Appointment info is required."],
    },
    availability: [
      {
        day: { type: String },
        time: { type: String },
      },
    ],
    languages: [
      {
        type: String,
        trim: true,
      },
    ],
    location: {
      type: String,
      required: [true, "Location is required."],
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
    homeVisits: {
      type: Boolean,
      required: true,
      default: false,
    },
    images: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const DoctorModel = mongoose.model("Doctor", DoctorSchema);

export default DoctorModel;