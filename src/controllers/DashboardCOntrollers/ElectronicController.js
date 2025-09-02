import ElectronicsModel from "../../models/DashboardModel/ElectronicModel.js";

export async function createElectronics(req, res) {
  try {
    const electronicsData = req.body;
    const electronics = new ElectronicsModel(electronicsData);
    await electronics.save();

    res.status(201).json({
      success: true,
      message: "Electronics store details added successfully!",
      data: electronics,
    });
  } catch (error) {
    console.error("Error saving electronics store:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add electronics store details",
      error: error.message,
    });
  }
}

// @desc    Get all electronics store listings
// @route   GET /api/electronics
export async function getElectronics(req, res) {
  try {
    const electronicsStores = await ElectronicsModel.find({});
    res.status(200).json({
      success: true,
      count: electronicsStores.length,
      data: electronicsStores,
    });
  } catch (error) {
    console.error("Error fetching electronics stores:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch electronics store details",
      error: error.message,
    });
  }
}