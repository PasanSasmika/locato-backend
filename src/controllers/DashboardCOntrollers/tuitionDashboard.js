import TuitionModel from "../../models/DashboardModel/TuitionModel.js";

export async function createTuition(req, res) {
  try {
    const { location, ...restOfData } = req.body;

    // Prepare the location data for the new schema
    const newTuitionData = {
      ...restOfData,
      location: {
        address: location.address,
      },
    };

    // Only add the point if coordinates were provided
    if (location.coordinates && location.coordinates.lat && location.coordinates.lng) {
      newTuitionData.location.point = {
        type: 'Point',
        // GeoJSON format is [longitude, latitude]
        coordinates: [location.coordinates.lng, location.coordinates.lat],
      };
    }

    const tuition = new TuitionModel(newTuitionData);
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