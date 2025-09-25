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
      enum: ["Government", "Private"],
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
    coordinates: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
        default: 'Point'
      },
      coordinates: {
        type: [Number],
        required: true,
      },
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
        type: String,
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