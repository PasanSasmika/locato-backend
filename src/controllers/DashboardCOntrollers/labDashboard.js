import LabModel from "../../models/DashboardModel/LabModel.js";

// @desc    Create a new lab listing
// @route   POST /api/labs
export async function createLab(req, res) {
  try {
    const labData = req.body;

    // Ensure the coordinates are correctly formatted for the GeoJSON type
    const lab = new LabModel({
      ...labData,
      coordinates: {
        type: 'Point',
        coordinates: [labData.coordinates.longitude, labData.coordinates.latitude],
      },
    });

    await lab.save();

    res.status(201).json({
      success: true,
      message: "Lab details added successfully!",
      data: lab,
    });
  } catch (error) {
    console.error("Error saving lab:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add lab details",
      error: error.message,
    });
  }
}

// @desc    Get all lab listings
// @route   GET /api/labs
export async function getLabs(req, res) {
  try {
    const labs = await LabModel.find({});
    res.status(200).json({
      success: true,
      count: labs.length,
      data: labs,
    });
  } catch (error) {
    console.error("Error fetching labs:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch lab details",
      error: error.message,
    });
  }
}