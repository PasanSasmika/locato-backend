import SpaModel from "../../models/DashboardModel/spaModel.js";

// @route   POST /api/spas
export async function createSpa(req, res) {
  try {
    const spaData = req.body;
    const spa = new SpaModel(spaData);
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