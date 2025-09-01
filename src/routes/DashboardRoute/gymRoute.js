import express from 'express';
import { createGym, getGyms } from '../../controllers/DashboardCOntrollers/GymController.js';

const gymRouter = express.Router();

gymRouter.post("/", createGym);
gymRouter.get("/", getGyms);

export default gymRouter;