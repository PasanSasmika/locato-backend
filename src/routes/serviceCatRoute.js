import express from 'express';
import { createServiceCategory } from '../controllers/serviceCategoriController.js';


const serviceCatRouter = express.Router();

serviceCatRouter.post("/", createServiceCategory)
serviceCatRouter.get("/",createServiceCategory);



export default serviceCatRouter;