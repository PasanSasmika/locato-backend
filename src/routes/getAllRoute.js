// routes/allServicesRoute.js
import express from 'express';
import SupermarketModel from '../models/DashboardModel/supermarketModel.js';
import SpaModel from '../models/DashboardModel/spaModel.js';
import SaloonModel from '../models/DashboardModel/SaloonModel.js';
import RestaurantModel from '../models/DashboardModel/RestaurantModel.js';
import PharmacyModel from '../models/DashboardModel/PharmacyModel.js';
import LabModel from '../models/DashboardModel/LabModel.js';
import HospitalModel from '../models/DashboardModel/HospitalModel.js';


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
    const validServices = requestedServices.filter(service => serviceModels[service]);

    if (validServices.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No valid services specified',
      });
    }

    const queries = validServices.map(service =>
      serviceModels[service].find({}).then(data => ({
        [service]: { count: data.length, data },
      }))
    );

    const results = await Promise.all(queries);
    const response = results.reduce((acc, curr) => ({ ...acc, ...curr }), {});

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch services',
      error: error.message,
    });
  }
});

export default router;