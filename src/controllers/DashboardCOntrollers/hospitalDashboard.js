
// @desc    Create a new hospital listing

import HospitalModel from "../../models/DashboardModel/HospitalModel.js";

// @route   POST /api/hospitals
export async function createHospital(req, res) {
  try {
    const hospitalData = req.body;

    // Create a new hospital instance with the received data
    const hospital = new HospitalModel(hospitalData);
    
    // Save the new hospital to the database
    await hospital.save();

    res.status(201).json({
      success: true,
      message: "Hospital details added successfully!",
      data: hospital,
    });
  } catch (error) {
    console.error("Error saving hospital:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add hospital details",
      error: error.message,
    });
  }
}

// @desc    Get all hospital listings
// @route   GET /api/hospitals
export async function getHospitals(req, res) {
  try {
    const hospitals = await HospitalModel.find({});
    res.status(200).json({
      success: true,
      count: hospitals.length,
      data: hospitals,
    });
  } catch (error) {
    console.error("Error fetching hospitals:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch hospital details",
      error: error.message,
    });
  }
}