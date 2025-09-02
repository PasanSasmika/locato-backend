import express from 'express';
import { createRestaurant, getRestaurants } from '../../controllers/DashboardCOntrollers/RestaurantController.js';

const restaurantRouter = express.Router();

restaurantRouter.post("/", createRestaurant);
restaurantRouter.get("/", getRestaurants);

export default restaurantRouter;