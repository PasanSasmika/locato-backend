import express from 'express';
import { createBridalMakeup, getBridalMakeups } from '../../controllers/DashboardCOntrollers/BridalMakeupDashboard.js';

const bridalMakeupRouter = express.Router();

bridalMakeupRouter.post("/", createBridalMakeup);
bridalMakeupRouter.get("/", getBridalMakeups);

export default bridalMakeupRouter;