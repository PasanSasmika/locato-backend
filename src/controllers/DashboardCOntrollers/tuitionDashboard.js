import TuitionModel from "../../models/DashboardModel/TuitionModel.js";

export async function createTuition(req, res) {
  try {
    const tuitionData = req.body;

    const tuition = new TuitionModel(tuitionData);
    await tuition.save();

    res.status(201).json({
      success: true,
      message: "Tuition details added successfully!",
      data: tuition,
    });
  } catch (error) {
    console.error("Error saving tuition:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add tuition details",
      error: error.message,
    });
  }
}

export async function getTuitions(req, res) {
  try {
    const tuitions = await TuitionModel.find({});
    res.status(200).json({
      success: true,
      count: tuitions.length,
      data: tuitions,
    });
  } catch (error) {
    console.error("Error fetching tuitions:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch tuition details",
      error: error.message,
    });
  }
}
