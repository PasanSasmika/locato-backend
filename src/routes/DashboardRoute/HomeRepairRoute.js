import express from 'express';
import { createHomeRepair, getHomeRepairs } from '../../controllers/DashboardCOntrollers/HomeRepairController.js';

const homeRepairRouter = express.Router();

homeRepairRouter.post("/", createHomeRepair);
homeRepairRouter.get("/", getHomeRepairs);

export default homeRepairRouter;