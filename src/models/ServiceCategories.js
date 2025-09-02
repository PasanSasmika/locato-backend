import mongoose from "mongoose";

const ServiceCategorySchema = mongoose.Schema({
    Category: {
        type: String,
        required: true,
    },
    subCategories: [
        {
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: false
            },
            icon: {
                type: String,
                required: false
            }
        }
    ]
});

const ServiceCategories = mongoose.model("serviceCategories", ServiceCategorySchema);

export default ServiceCategories;