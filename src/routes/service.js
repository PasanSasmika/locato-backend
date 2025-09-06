import express from 'express';
import { searchServices } from '../controllers/searchController.js';

const Servicerouter = express.Router();

Servicerouter.get('/search', searchServices);

export default Servicerouter;