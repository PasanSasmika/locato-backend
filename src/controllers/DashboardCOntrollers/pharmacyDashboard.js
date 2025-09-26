import PharmacyModel from "../../models/DashboardModel/PharmacyModel.js";

// @desc    Create a new pharmacy listing
// @route   POST /api/pharmacies
export async function createPharmacy(req, res) {
  try {
    const pharmacyData = req.body;

    // --- MODIFIED ---
    const pharmacy = new PharmacyModel({
      ...pharmacyData,
      coordinates: {
        type: 'Point',
        // Note: GeoJSON stores as [longitude, latitude]
        coordinates: [pharmacyData.coordinates.longitude, pharmacyData.coordinates.latitude],
      },
    });
    // --- END MODIFIED ---

    await pharmacy.save();

    res.status(201).json({
      success: true,
      message: "Pharmacy details added successfully!",
      data: pharmacy,
    });
  } catch (error) {
    console.error("Error saving pharmacy:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add pharmacy details",
      error: error.message,
    });
  }
}

// @desc    Get all pharmacy listings
// @route   GET /api/pharmacies
export async function getPharmacies(req, res) {
  try {
    const pharmacies = await PharmacyModel.find({});
    res.status(200).json({
      success: true,
      count: pharmacies.length,
      data: pharmacies,
    });
  } catch (error) {
    console.error("Error fetching pharmacies:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch pharmacy details",
      error: error.message,
    });
  }
}