
// @desc    Create a new Ayurveda centre listing

import AyurvedaModel from "../../models/DashboardModel/AyurwedhaModel.js";

// @route   POST /api/ayurveda
export async function createAyurvedaCentre(req, res) {
  try {
    const centreData = req.body;
    
    // Ensure the coordinates are correctly formatted for the GeoJSON type
    const centre = new AyurvedaModel({
      ...centreData,
      coordinates: {
        type: 'Point',
        coordinates: [centreData.coordinates.longitude, centreData.coordinates.latitude],
      },
    });
    
    await centre.save();

    res.status(201).json({
      success: true,
      message: "Ayurveda centre details added successfully!",
      data: centre,
    });
  } catch (error) {
    console.error("Error saving Ayurveda centre:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add Ayurveda centre details",
      error: error.message,
    });
  }
}


// @desc    Get all Ayurveda centre listings
// @route   GET /api/ayurveda
export async function getAyurvedaCentres(req, res) {
  try {
    const centres = await AyurvedaModel.find({});
    res.status(200).json({
      success: true,
      count: centres.length,
      data: centres,
    });
  } catch (error) {
    console.error("Error fetching Ayurveda centres:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch Ayurveda centre details",
      error: error.message,
    });
  }
}