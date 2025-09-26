import SupermarketModel from "../models/DashboardModel/supermarketModel.js";

export async function createSupermarket(req, res) {
  try {
    const supermarketData = req.body;
    
    // --- MODIFIED ---
    const supermarket = new SupermarketModel({
        ...supermarketData,
        coordinates: {
            type: 'Point',
            coordinates: [supermarketData.coordinates.longitude, supermarketData.coordinates.latitude],
        },
    });
    // --- END MODIFIED ---

    await supermarket.save();

    res.status(201).json({
      success: true,
      message: "Supermarket details added successfully!",
      data: supermarket,
    });
  } catch (error) {
    console.error("Error saving supermarket:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add supermarket details",
      error: error.message,
    });
  }
}

export async function getSupermarkets(req, res) {
  try {
    const supermarkets = await SupermarketModel.find({});
    res.status(200).json({
      success: true,
      count: supermarkets.length,
      data: supermarkets,
    });
  } catch (error) {
    console.error("Error fetching supermarkets:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch supermarket details",
      error: error.message,
    });
  }
}