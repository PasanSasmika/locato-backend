import express from 'express';
import { createHomeRepair, getHomeRepairs } from '../../controllers/DashboardCOntrollers/HomeRepairController.js';

const homeRepair = express.Router();

homeRepair.post("/", createHomeRepair);
homeRepair.get("/", getHomeRepairs);

export default homeRepair;