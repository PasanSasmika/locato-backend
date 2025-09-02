import express from 'express';
import { createHardware, getHardware } from '../../controllers/DashboardCOntrollers/HardwareController.js';

const hardwareRouter = express.Router();

hardwareRouter.post("/", createHardware);
hardwareRouter.get("/", getHardware);

export default hardwareRouter;