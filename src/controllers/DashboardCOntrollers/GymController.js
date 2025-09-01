
// @desc    Create a new gym listing

import GymModel from "../../models/DashboardModel/GymModel.js";

// @route   POST /api/gyms
export async function createGym(req, res) {
  try {
    const gymData = req.body;
    const gym = new GymModel(gymData);
    await gym.save();

    res.status(201).json({
      success: true,
      message: "Gym details added successfully!",
      data: gym,
    });
  } catch (error) {
    console.error("Error saving gym:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add gym details",
      error: error.message,
    });
  }
}

// @desc    Get all gym listings
// @route   GET /api/gyms
export async function getGyms(req, res) {
  try {
    const gyms = await GymModel.find({});
    res.status(200).json({
      success: true,
      count: gyms.length,
      data: gyms,
    });
  } catch (error) {
    console.error("Error fetching gyms:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch gym details",
      error: error.message,
    });
  }
}