// routes/dashboardRoutes.js

import express from 'express';
import { createService, getServicesByUser } from '../controllers/DashboardController.js';

const Dashboardrouter = express.Router();

// Route to post a new service form
// POST /api/dashboard
Dashboardrouter.post('/', createService);

// Route to get all services submitted by the logged-in user
// GET /api/dashboard/user
Dashboardrouter.get('/user', getServicesByUser);


export default Dashboardrouter;