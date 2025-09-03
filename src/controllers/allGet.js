import HospitalModel from "../models/DashboardModel/HospitalModel.js";
import LabModel from "../models/DashboardModel/LabModel.js";
import PharmacyModel from "../models/DashboardModel/PharmacyModel.js";
import RestaurantModel from "../models/DashboardModel/RestaurantModel.js";
import SaloonModel from "../models/DashboardModel/SaloonModel.js";
import SpaModel from "../models/DashboardModel/SpaModel.js";
import SupermarketModel from "../models/DashboardModel/SupermarketModel.js";


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