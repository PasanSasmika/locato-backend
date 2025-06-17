import cloudinary from "../lib/cloudinary.js"
import ServiceReq from "../models/serviceReqModel.js";




export async function serviceRequest(req,res){

    try {
        const {email , firstName, lastName, serviceType, mobileNo, nic, Images, address} = req.body;

        if(!email || !firstName || !lastName || !serviceType || !mobileNo || !nic  || !Images || !address ){
            return res.status(400).json({ message: "Please provide all fields"});
        }

          const uploadResponse = await cloudinary.uploader.upload(Images);
          const imageUrl = uploadResponse.secure_url;


        //save to the mongodb

        const newRequest = new ServiceReq({
           email ,
            firstName,
            lastName, 
            serviceType, 
            mobileNo,
            nic, 
            Images:imageUrl,
            address
        })

        await newRequest.save()

        res.status(201).json(newRequest)
        
    } catch (error) {
        console.log("Error send request", error);
        res.status(500).json({message: error.message});
    }

}


export function getserviceRequest(req,res){
    ServiceReq.find({}).then((servicereq)=>{
        res.json(servicereq)
    })
}

