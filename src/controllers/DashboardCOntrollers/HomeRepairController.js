import HomeRepairModel from "../../models/DashboardModel/HomeRepairModel.js";


export async function createHomeRepair(req, res) {
  try {
    const repairData = req.body;
    const repair = new HomeRepairModel(repairData);
    await repair.save();

    res.status(201).json({
      success: true,
      message: "Home repair details added successfully!",
      data: repair,
    });
  } catch (error) {
    console.error("Error saving home repair:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add home repair details",
      error: error.message,
    });
  }
}

// @desc    Get all home repair listings
// @route   GET /api/home-repair
export async function getHomeRepairs(req, res) {
  try {
    const repairs = await HomeRepairModel.find({});
    res.status(200).json({
      success: true,
      count: repairs.length,
      data: repairs,
    });
  } catch (error) {
    console.error("Error fetching home repairs:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch home repair details",
      error: error.message,
    });
  }
}