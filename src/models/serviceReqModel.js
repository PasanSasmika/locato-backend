import mongoose from "mongoose";

const ServiceRequestSchema = mongoose.Schema({

    email: {
        type: String,
        required : true,
        unique: true
    },
    firstName : {
        type : String,
        required : true
    },

    lastName : {
        type : String,
        required : true
    },
    

    serviceType : {
        type: String,
        required : true
    },

    mobileNo : {
        type : String,
        required : true
    },

    nic : {
        type : String,
        required : true
    },

    profilepic : {
        type : String,
    },

    Images :{
        type : String,
        required : true
    },

      address : {
        type : String,
        required : true
    },

})

const ServiceReq = mongoose.model("serviceReq", ServiceRequestSchema)

export default ServiceReq;