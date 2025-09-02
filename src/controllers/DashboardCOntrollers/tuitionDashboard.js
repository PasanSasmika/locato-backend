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


export async function getTuition(req, res) {
  try {
    const tuitionClasses = await TuitionModel.find({});
    res.status(200).json({
      success: true,
      count: tuitionClasses.length,
      data: tuitionClasses,
    });
  } catch (error) {
    console.error("Error fetching tuition classes:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch tuition details",
      error: error.message,
    });
  }
}