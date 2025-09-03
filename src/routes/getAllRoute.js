// routes/getAllRoute.js
import express from 'express';
import HospitalModel from '../models/DashboardModel/HospitalModel.js';
import LabModel from '../models/DashboardModel/LabModel.js';
import PharmacyModel from '../models/DashboardModel/PharmacyModel.js';
import RestaurantModel from '../models/DashboardModel/RestaurantModel.js';
import SaloonModel from '../models/DashboardModel/SaloonModel.js';
import SpaModel from '../models/DashboardModel/spaModel.js'; // Fixed case
import SupermarketModel from '../models/DashboardModel/supermarketModel.js'; // Fixed case

const router = express.Router();

const serviceModels = {
  hospitals: HospitalModel,
  labs: LabModel,
  pharmacies: PharmacyModel,
  restaurants: RestaurantModel,
  saloons: SaloonModel,
  spas: SpaModel,
  supermarkets: SupermarketModel,
};

// @desc    Get specified services or all services
// @route   GET /api/all-services?services=hospitals,labs,pharmacies
router.get('/', async (req, res) => {
  try {
    const requestedServices = req.query.services
      ? req.query.services.split(',')
      : Object.keys(serviceModels);
    const validServices = requestedServices.filter(service => serviceModels[service] || console.warn(`Service ${service} not found`));

    if (validServices.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No valid services specified',
      });
    }

    const queries = validServices.map(async service => {
      try {
        const data = await serviceModels[service].find({});
        return { [service]: { count: data.length, data } };
      } catch (error) {
        console.warn(`Failed to fetch ${service}:`, error.message);
        return { [service]: { count: 0, data: [] } };
      }
    });

    const results = await Promise.all(queries);
    const response = results.reduce((acc, curr) => ({ ...acc, ...curr }), {});

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    console.error('Error fetching services for:', requestedServices, error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch services',
      error: error.message,
    });
  }
});

export default router;