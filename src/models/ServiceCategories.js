import mongoose from "mongoose";

const ServiceCategorySchema = mongoose.Schema({

    Category: {

        type: String,
        required : true,
    },

    subCategories :[
         {
            
          type : String,
          required : true
       }
    ],
    
})

const ServiceCategories = mongoose.model("serviceCategories", ServiceCategorySchema)

export default ServiceCategories;