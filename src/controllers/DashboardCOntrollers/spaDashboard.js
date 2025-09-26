import SpaModel from "../../models/DashboardModel/spaModel.js";

// @route   POST /api/spas
export async function createSpa(req, res) {
  try {
    const spaData = req.body;
    
    // --- MODIFIED ---
    const spa = new SpaModel({
        ...spaData,
        coordinates: {
            type: 'Point',
            coordinates: [spaData.coordinates.longitude, spaData.coordinates.latitude],
        },
    });
    // --- END MODIFIED ---

    await spa.save();

    res.status(201).json({
      success: true,
      message: "Spa details added successfully!",
      data: spa,
    });
  } catch (error) {
    console.error("Error saving spa:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add spa details",
      error: error.message,
    });
  }
}

// @route   GET /api/spas
export async function getSpas(req, res) {
  try {
    const spas = await SpaModel.find({});
    res.status(200).json({
      success: true,
      count: spas.length,
      data: spas,
    });
  } catch (error) {
    console.error("Error fetching spas:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch spa details",
      error: error.message,
    });
  }
}