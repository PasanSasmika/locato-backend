import HospitalModel from "../models/DashboardModel/HospitalModel.js";
import LabModel from "../models/DashboardModel/LabModel.js";
import PharmacyModel from "../models/DashboardModel/PharmacyModel.js";
import RestaurantModel from "../models/DashboardModel/RestaurantModel.js";
import SaloonModel from "../models/DashboardModel/SaloonModel.js";
import SpaModel from "../models/DashboardModel/spaModel.js";
import SupermarketModel from "../models/DashboardModel/supermarketModel.js";


export async function getHospitals(req, res) {
  try {
    const hospitals = await HospitalModel.find({});
    res.status(200).json({
      success: true,
      count: hospitals.length,
      data: hospitals,
    });
  } catch (error) {
    console.error("Error fetching hospitals:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch hospital details",
      error: error.message,
    });
  }
}
export async function getLabs(req, res) {
  try {
    const labs = await LabModel.find({});
    res.status(200).json({
      success: true,
      count: labs.length,
      data: labs,
    });
  } catch (error) {
    console.error("Error fetching labs:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch lab details",
      error: error.message,
    });
  }
}

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

export async function getSaloons(req, res) {
  try {
    const saloons = await SaloonModel.find({});
    res.status(200).json({
      success: true,
      count: saloons.length,
      data: saloons,
    });
  } catch (error) {
    console.error("Error fetching saloons:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch saloon details",
      error: error.message,
    });
  }
}


export async function getSpas(req, res) {
  try {
    const spas = await SpaModel.find({});
    res.status(200).json({
      success: true,
      count: spas.length,
      data: spas,
    });
  } catch (error) {
    console.error("Error fetching spas:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch spa details",
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

export async function getAyurvedaCentres(req, res) {
  try {
    const centres = await AyurvedaModel.find({});
    res.status(200).json({
      success: true,
      count: centres.length,
      data: centres,
    });
  } catch (error) {
    console.error("Error fetching Ayurveda centres:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch Ayurveda centre details",
      error: error.message,
    });
  }
}

export async function getBridalMakeups(req, res) {
  try {
    const bridalMakeups = await BridalMakeupModel.find({});
    res.status(200).json({
      success: true,
      count: bridalMakeups.length,
      data: bridalMakeups,
    });
  } catch (error) {
    console.error("Error fetching bridal makeups:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch bridal makeup details",
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

export async function getElectronics(req, res) {
  try {
    const electronicsStores = await ElectronicsModel.find({});
    res.status(200).json({
      success: true,
      count: electronicsStores.length,
      data: electronicsStores,
    });
  } catch (error) {
    console.error("Error fetching electronics stores:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch electronics store details",
      error: error.message,
    });
  }
}

export async function getGyms(req, res) {
  try {
    const gyms = await GymModel.find({});
    res.status(200).json({
      success: true,
      count: gyms.length,
      data: gyms,
    });
  } catch (error) {
    console.error("Error fetching gyms:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch gym details",
      error: error.message,
    });
  }
}

export async function getHardware(req, res) {
  try {
    const hardwareStores = await HardwareModel.find({});
    res.status(200).json({
      success: true,
      count: hardwareStores.length,
      data: hardwareStores,
    });
  } catch (error) {
    console.error("Error fetching hardware stores:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch hardware store details",
      error: error.message,
    });
  }
}

export async function getHomeRepairs(req, res) {
  try {
    const repairs = await HomeRepairModel.find({});
    res.status(200).json({
      success: true,
      count: repairs.length,
      data: repairs,
    });
  } catch (error) {
    console.error("Error fetching home repairs:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch home repair details",
      error: error.message,
    });
  }
}