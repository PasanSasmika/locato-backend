import express from 'express';
import { createSpa, getSpas } from '../../controllers/DashboardCOntrollers/spaDashboard.js';

const spaRouter = express.Router();

spaRouter.post("/", createSpa);
spaRouter.get("/", getSpas);

export default spaRouter;