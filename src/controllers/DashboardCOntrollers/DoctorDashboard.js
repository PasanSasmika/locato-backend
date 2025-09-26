import DoctorModel from "../../models/DashboardModel/DoctorModel.js";

// @desc    Create a new doctor listing
// @route   POST /api/doctors
export async function createDoctor(req, res) {
  try {
    const doctorData = req.body;

    const doctor = new DoctorModel({
      ...doctorData,
      coordinates: {
        type: 'Point',
        coordinates: [doctorData.coordinates.longitude, doctorData.coordinates.latitude],
      },
    });

    await doctor.save();

    res.status(201).json({
      success: true,
      message: "Doctor details added successfully!",
      data: doctor,
    });
  } catch (error) {
    console.error("Error saving doctor:", error);

    // --- NEW & IMPROVED ERROR HANDLING ---
    // Check if it's a Mongoose validation error
    if (error.name === 'ValidationError') {
      // Extract the error messages into an array
      const messages = Object.values(error.errors).map(val => val.message);
      
      // Respond with a 400 status and the specific error messages
      return res.status(400).json({
        success: false,
        message: "Validation failed. Please check your input.",
        errors: messages,
      });
    }

    // For any other server-side errors, respond with a 500
    res.status(500).json({
      success: false,
      message: "An unexpected error occurred on the server.",
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