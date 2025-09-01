import BridalMakeupModel from "../../models/DashboardModel/BridalandMakeupModel.js";

// @route   POST /api/bridal-makeup
export async function createBridalMakeup(req, res) {
  try {
    const bridalData = req.body;
    const bridal = new BridalMakeupModel(bridalData);
    await bridal.save();

    res.status(201).json({
      success: true,
      message: "Bridal makeup details added successfully!",
      data: bridal,
    });
  } catch (error) {
    console.error("Error saving bridal makeup:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add bridal makeup details",
      error: error.message,
    });
  }
}

// @desc    Get all bridal makeup listings
// @route   GET /api/bridal-makeup
export async function getBridalMakeups(req, res) {
  try {
    const bridalMakeups = await BridalMakeupModel.find({});
    res.status(200).json({
      success: true,
      count: bridalMakeups.length,
      data: bridalMakeups,
    });
  } catch (error) {
    console.error("Error fetching bridal makeups:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch bridal makeup details",
      error: error.message,
    });
  }
}