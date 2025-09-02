import express from 'express';
import { createServiceCategory, getServiceCategories } from '../controllers/serviceCategoriController.js';

const serviceCatRouter = express.Router();

serviceCatRouter.post("/", createServiceCategory);
serviceCatRouter.get("/", getServiceCategories);

export default serviceCatRouter;