import express from 'express';
import { createTuition, getTuition } from '../../controllers/DashboardControllers/TuitionDashboard.js';

const tuitionRouter = express.Router();

tuitionRouter.post("/", createTuition);
tuitionRouter.get("/", getTuition);

export default tuitionRouter;