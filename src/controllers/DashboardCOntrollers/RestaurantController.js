import RestaurantModel from "../../models/DashboardModel/RestaurantModel.js";

export async function createRestaurant(req, res) {
  try {
    const restaurantData = req.body;
    const restaurant = new RestaurantModel(restaurantData);
    await restaurant.save();

    res.status(201).json({
      success: true,
      message: "Restaurant details added successfully!",
      data: restaurant,
    });
  } catch (error) {
    console.error("Error saving restaurant:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add restaurant details",
      error: error.message,
    });
  }
}

// @desc    Get all restaurant listings
// @route   GET /api/restaurants
export async function getRestaurants(req, res) {
  try {
    const restaurants = await RestaurantModel.find({});
    res.status(200).json({
      success: true,
      count: restaurants.length,
      data: restaurants,
    });
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch restaurant details",
      error: error.message,
    });
  }
}