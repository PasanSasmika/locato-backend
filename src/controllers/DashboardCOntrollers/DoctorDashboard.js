import DoctorModel from "../../models/DashboardModel/DoctorModel.js";

// @desc    Create a new doctor listing
// @route   POST /api/doctors
export async function createDoctor(req, res) {
  try {
    const doctorData = req.body;

    // --- MODIFIED ---
    const doctor = new DoctorModel({
        ...doctorData,
        coordinates: {
            type: 'Point',
            coordinates: [doctorData.coordinates.longitude, doctorData.coordinates.latitude],
        },
    });
    // --- END MODIFIED ---

    await doctor.save();

    res.status(201).json({
      success: true,
      message: "Doctor details added successfully!",
      data: doctor,
    });
  } catch (error) {
    console.error("Error saving doctor:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add doctor details",
      error: error.message,
    });
  }
}

// @desc    Get all doctor listings
// @route   GET /api/doctors
export async function getDoctors(req, res) {
  try {
    const doctors = await DoctorModel.find({});
    res.status(200).json({
      success: true,
      count: doctors.length,
      data: doctors,
    });
  } catch (error) {
    console.error("Error fetching doctors:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch doctor details",
      error: error.message,
    });
  }
}