import ClothingModel from "../../models/DashboardModel/ClothingModel.js";

export async function createClothing(req, res) {
  try {
    const clothingData = req.body;
    const clothing = new ClothingModel(clothingData);
    await clothing.save();

    res.status(201).json({
      success: true,
      message: "Clothing store details added successfully!",
      data: clothing,
    });
  } catch (error) {
    console.error("Error saving clothing store:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add clothing store details",
      error: error.message,
    });
  }
}


export async function getClothing(req, res) {
  try {
    const clothingStores = await ClothingModel.find({});
    res.status(200).json({
      success: true,
      count: clothingStores.length,
      data: clothingStores,
    });
  } catch (error) {
    console.error("Error fetching clothing stores:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch clothing store details",
      error: error.message,
    });
  }
}