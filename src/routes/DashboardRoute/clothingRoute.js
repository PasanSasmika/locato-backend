import express from 'express';
import { createClothing, getClothing } from '../../controllers/DashboardCOntrollers/ClothingDashboard.js';

const clothingRouter = express.Router();

clothingRouter.post("/", createClothing);
clothingRouter.get("/", getClothing);

export default clothingRouter;