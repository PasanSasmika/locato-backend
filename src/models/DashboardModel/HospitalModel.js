import mongoose from "mongoose";

const HospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Hospital name is required."],
      trim: true,
    },
    hospitalType: {
      type: String,
      required: [true, "Hospital type is required."],
      enum: ["Government", "Private"], // Ensures only these two values are accepted
    },
    departments: [
      {
        type: String,
        trim: true,
      },
    ],
    emergency247: {
      type: Boolean,
      required: true,
      default: false,
    },
    contactNo: {
      type: String,
      required: [true, "Contact number is required."],
    },
    location: {
      type: String,
      required: [true, "Location is required."],
    },
    visitingHours: {
      type: String,
    },
    website: {
      type: String,
    },
    ambulanceNo: {
      type: String,
    },
    images: [
      {
        type: String, // To store base64 image strings
      },
    ],
    nextUpdateDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

const HospitalModel = mongoose.model("Hospital", HospitalSchema);

export default HospitalModel;