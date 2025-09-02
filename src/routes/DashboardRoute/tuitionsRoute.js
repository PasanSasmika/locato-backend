import express from 'express';
import { createTuition, getTuition } from '../../controllers/DashboardCOntrollers/tuitionsController.js';

const tuitionRouter = express.Router();

tuitionRouter.post("/", createTuition);
tuitionRouter.get("/", getTuition);

export default tuitionRouter;

