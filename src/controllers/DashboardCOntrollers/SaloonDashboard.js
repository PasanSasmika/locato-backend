import SaloonModel from "../../models/DashboardModel/SaloonModel.js";

// @desc    Create a new saloon listing
// @route   POST /api/saloons
export async function createSaloon(req, res) {
  try {
    const saloonData = req.body;

    // --- MODIFIED ---
    const saloon = new SaloonModel({
      ...saloonData,
      coordinates: {
        type: 'Point',
        coordinates: [saloonData.coordinates.longitude, saloonData.coordinates.latitude],
      },
    });
    // --- END MODIFIED ---

    await saloon.save();

    res.status(201).json({
      success: true,
      message: "Saloon details added successfully!",
      data: saloon,
    });
  } catch (error) {
    console.error("Error saving saloon:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add saloon details",
      error: error.message,
    });
  }
}

// @desc    Get all saloon listings
// @route   GET /api/saloons
export async function getSaloons(req, res) {
  try {
    const saloons = await SaloonModel.find({});
    res.status(200).json({
      success: true,
      count: saloons.length,
      data: saloons,
    });
  } catch (error) {
    console.error("Error fetching saloons:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch saloon details",
      error: error.message,
    });
  }
}