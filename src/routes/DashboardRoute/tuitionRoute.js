import express from 'express';
import { createTuition, getTuitions } from '../../controllers/DashboardCOntrollers/tuitionDashboard.js';



const tuitionRouter = express.Router();

tuitionRouter.post("/", createTuition)
tuitionRouter.get("/",getTuitions); 



export default tuitionRouter;