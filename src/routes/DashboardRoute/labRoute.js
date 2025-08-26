import express from 'express';
import { createLab, getLabs } from '../../controllers/DashboardCOntrollers/labDashboard.js';

const labRouter = express.Router();

labRouter.post("/", createLab);
labRouter.get("/", getLabs);

export default labRouter;