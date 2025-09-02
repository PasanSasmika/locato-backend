import HardwareModel from "../../models/DashboardModel/HardwareModel.js";

export async function createHardware(req, res) {
  try {
    const hardwareData = req.body;
    const hardware = new HardwareModel(hardwareData);
    await hardware.save();

    res.status(201).json({
      success: true,
      message: "Hardware store details added successfully!",
      data: hardware,
    });
  } catch (error) {
    console.error("Error saving hardware store:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add hardware store details",
      error: error.message,
    });
  }
}

// @desc    Get all hardware store listings
// @route   GET /api/hardware
export async function getHardware(req, res) {
  try {
    const hardwareStores = await HardwareModel.find({});
    res.status(200).json({
      success: true,
      count: hardwareStores.length,
      data: hardwareStores,
    });
  } catch (error) {
    console.error("Error fetching hardware stores:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch hardware store details",
      error: error.message,
    });
  }
}