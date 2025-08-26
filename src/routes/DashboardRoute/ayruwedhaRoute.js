import express from 'express';
import { createAyurvedaCentre, getAyurvedaCentres } from '../../controllers/DashboardCOntrollers/AyurwedhaDashboard.js';

const ayurvedaRouter = express.Router();

ayurvedaRouter.post("/", createAyurvedaCentre);
ayurvedaRouter.get("/", getAyurvedaCentres);

export default ayurvedaRouter;