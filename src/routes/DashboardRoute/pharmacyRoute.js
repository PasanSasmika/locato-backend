import express from 'express';
import { createPharmacy, getPharmacies } from '../../controllers/DashboardCOntrollers/pharmacyDashboard.js';

const pharmacyRouter = express.Router();

pharmacyRouter.post("/", createPharmacy);
pharmacyRouter.get("/", getPharmacies);

export default pharmacyRouter;