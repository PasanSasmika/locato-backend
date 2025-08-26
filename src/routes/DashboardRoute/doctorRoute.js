import express from 'express';
import { createDoctor, getDoctors } from '../../controllers/DashboardCOntrollers/DoctorDashboard.js';

const doctorRouter = express.Router();

doctorRouter.post("/", createDoctor);
doctorRouter.get("/", getDoctors);

export default doctorRouter;