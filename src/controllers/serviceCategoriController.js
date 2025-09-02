import ServiceCategories from "../models/ServiceCategories.js";
import { isAdmin } from "../../users/userType.js";

export function createServiceCategory(req, res) {
    // if (!isAdmin(req)) {
    //     return res.status(403).json({
    //         message: "Please login as an admin to add Categories!"
    //     });
    // }

    const newServiceListData = req.body;

    const serviceCategory = new ServiceCategories(newServiceListData);

    serviceCategory.save()
        .then(() => {
            res.json({
                message: "Category added successfully!"
            });
        })
        .catch((error) => {
            console.error(error);
            res.status(400).json({
                message: "Error adding category",
                error: error.message
            });
        });
}

export function getServiceCategories(req, res) {
    ServiceCategories.find({})
        .then((serviceCat) => {
            res.json(serviceCat);
        })
        .catch((error) => {
            res.status(500).json({
                message: "Error retrieving categories",
                error: error.message
            });
        });
}