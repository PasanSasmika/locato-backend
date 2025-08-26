// controllers/dashboardController.js

import Dashboard from "../models/DashboardModel.js";


/**
 * @description Create a new service dashboard entry
 * @route POST /api/dashboard
 * @access Private
 */
export const createService = async (req, res) => {
  try {
    // req.user is populated by the JWT middleware in index.js
    if (!req.user) {
      return res.status(401).json({ message: 'Not authorized, no token' });
    }

    const newServiceData = {
      ...req.body,
      userId: req.user.id, // Link the dashboard to the logged-in user
    };

    const service = new Dashboard(newServiceData);
    await service.save();

    res.status(201).json({ message: 'Service created successfully', service });
  } catch (error) {
    console.error('Error creating service:', error.message);
    res.status(400).json({ message: 'Failed to create service', error: error.message });
  }
};

/**
 * @description Get all services for the logged-in user
 * @route GET /api/dashboard/user
 * @access Private
 */
export const getServicesByUser = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Not authorized, no token' });
    }

    const services = await Dashboard.find({ userId: req.user.id });

    if (!services) {
      return res.status(404).json({ message: 'No services found for this user.' });
    }

    res.status(200).json(services);
  } catch (error) {
    console.error('Error fetching user services:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};