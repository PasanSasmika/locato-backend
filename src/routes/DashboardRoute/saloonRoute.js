import express from 'express';
import { createSaloon, getSaloons } from '../../controllers/DashboardCOntrollers/SaloonDashboard.js';

const saloonRouter = express.Router();

saloonRouter.post("/", createSaloon);
saloonRouter.get("/", getSaloons);

export default saloonRouter;