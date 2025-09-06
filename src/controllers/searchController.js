import Service from "../models/Service.js";

export const searchServices = async (req, res) => {
  try {
    const {
      searchQuery,
      serviceType,
      location,
      deliveryAvailable,
      minRating,
      maxPrice,
      openNow,
      emergencyServices,
      // Add more filters as needed
    } = req.query;

    // Build the filter object dynamically
    let filter = {};

    if (serviceType) filter.serviceType = serviceType;
    if (location) filter.location = new RegExp(location, 'i');
    if (deliveryAvailable) filter.deliveryAvailable = deliveryAvailable === 'true';
    if (minRating) filter.rating = { $gte: parseFloat(minRating) };
    if (maxPrice) filter['details.priceRange'] = { $lte: parseFloat(maxPrice) };
    if (openNow) filter.openNow = openNow === 'true';
    if (emergencyServices) filter.emergencyServices = emergencyServices === 'true';

    // Text search across multiple fields
    if (searchQuery) {
      filter.$or = [
        { name: new RegExp(searchQuery, 'i') },
        { description: new RegExp(searchQuery, 'i') },
        { location: new RegExp(searchQuery, 'i') },
        { 'details.services': new RegExp(searchQuery, 'i') },
        { 'details.departments': new RegExp(searchQuery, 'i') },
        { 'details.cuisineTypes': new RegExp(searchQuery, 'i') },
        // Add more fields as needed
      ];
    }

    const results = await Service.find(filter);
    
    res.status(200).json({
      success: true,
      count: results.length,
      data: results
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};