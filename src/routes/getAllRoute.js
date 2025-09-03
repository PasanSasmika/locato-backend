import express from 'express';
import HospitalModel from '../models/DashboardModel/HospitalModel.js';
import LabModel from '../models/DashboardModel/LabModel.js';
import PharmacyModel from '../models/DashboardModel/PharmacyModel.js';
import RestaurantModel from '../models/DashboardModel/RestaurantModel.js';
import SaloonModel from '../models/DashboardModel/SaloonModel.js';
import SpaModel from '../models/DashboardModel/spaModel.js'; // Fixed case
import SupermarketModel from '../models/DashboardModel/supermarketModel.js'; // Fixed case
import AyurvedaModel from '../models/DashboardModel/AyurvedaModel.js';
import BridalMakeupModel from '../models/DashboardModel/BridalMakeupModel.js';
import ClothingModel from '../models/DashboardModel/ClothingModel.js';
import DoctorModel from '../models/DashboardModel/DoctorModel.js';
import ElectronicsModel from '../models/DashboardModel/ElectronicsModel.js';
import GymModel from '../models/DashboardModel/GymModel.js';
import HardwareModel from '../models/DashboardModel/HardwareModel.js';
import HomeRepairModel from '../models/DashboardModel/HomeRepairModel.js';

const router = express.Router();

// Aggregate endpoint to fetch data for specific services
router.get('/all-services', async (req, res) => {
  try {
    const { services } = req.query;

    // Map of service keys to their respective models
    const serviceModels = {
      hospitals: HospitalModel,
      labs: LabModel,
      pharmacies: PharmacyModel,
      restaurants: RestaurantModel,
      saloons: SaloonModel,
      spas: SpaModel,
      supermarkets: SupermarketModel,
      ayurveda: AyurvedaModel,
      'bridal-makeup': BridalMakeupModel,
      clothing: ClothingModel,
      doctors: DoctorModel,
      electronics: ElectronicsModel,
      gyms: GymModel,
      hardware: HardwareModel,
      'home-repair': HomeRepairModel,
    };

    // Validate and process the services query parameter
    const serviceKeys = services ? services.split(',') : Object.keys(serviceModels);
    const validServiceKeys = serviceKeys.filter(key => serviceModels[key]);

    if (validServiceKeys.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No valid services provided',
      });
    }

    // Fetch data for each requested service
    const data = {};
    for (const key of validServiceKeys) {
      const model = serviceModels[key];
      const items = await model.find({});
      data[key] = {
        success: true,
        count: items.length,
        data: items,
      };
    }

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch service details',
      error: error.message,
    });
  }
});

export default router;