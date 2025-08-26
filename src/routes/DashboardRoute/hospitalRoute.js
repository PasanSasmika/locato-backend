import express from 'express';
import { createHospital, getHospitals } from '../../controllers/DashboardCOntrollers/hospitalDashboard.js';

const hospitalRouter = express.Router();

// Route to create a new hospital
hospitalRouter.post("/", createHospital);

// Route to get all hospitals
hospitalRouter.get("/", getHospitals);

export default hospitalRouter;