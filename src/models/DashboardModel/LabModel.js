import mongoose from "mongoose";

const LabSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Lab name is required."],
      trim: true,
    },
    testsOffered: [
      {
        type: String,
        trim: true,
      },
    ],
    homeSampleCollection: {
      type: Boolean,
      required: true,
      default: false,
    },
    openHours: {
      type: String,
    },
    contactNo: {
      type: String,
      required: [true, "Contact number is required."],
    },
    location: {
      type: String,
      required: [true, "Location is required."],
    },
    website: {
      type: String,
    },
    images: [
      {
        type: String, // To store base64 image strings
      },
    ],
  },
  { timestamps: true }
);

const LabModel = mongoose.model("Lab", LabSchema);

export default LabModel;