import express from 'express';
import { createSupermarket, getSupermarkets } from '../../controllers/superMarketController.js';

const supermarketRouter = express.Router();

supermarketRouter.post("/", createSupermarket);
supermarketRouter.get("/", getSupermarkets);

export default supermarketRouter;