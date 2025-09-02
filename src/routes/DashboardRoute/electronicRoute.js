import express from 'express';
import { createElectronics, getElectronics } from '../../controllers/DashboardCOntrollers/ElectronicController.js';

const electronicsRouter = express.Router();

electronicsRouter.post("/", createElectronics);
electronicsRouter.get("/", getElectronics);

export default electronicsRouter;