import cloudinary from "../lib/cloudinary.js";
import ServiceReq from "../models/serviceReqModel.js"




export async function serviceRequest(req,res){

    try {
        const {email , firstName, lastName, serviceType, mobileNo, nic, Images, address} = req.body;

        if(!email || !firstName || !lastName || !serviceType || !mobileNo || !nic  || !Images || !address ){
            return res.status(400).json({ message: "Please provide all fields"});
        }

         // Check if Images is an array (even if single image)
        const imagesArray = Array.isArray(Images) ? Images : [Images];

        // Upload all images to Cloudinary
        const uploadPromises = imagesArray.map(async (image) => {
            const uploadResponse = await cloudinary.uploader.upload(image);
            return uploadResponse.secure_url;
        });

        const uploadedImageUrls = await Promise.all(uploadPromises);


        //save to the mongodb

        const newRequest = new ServiceReq({
           email ,
            firstName,
            lastName, 
            serviceType, 
            mobileNo,
            nic, 
            Images:uploadedImageUrls,
            address
        })

        await newRequest.save()

        res.status(201).json(newRequest)
        
    } catch (error) {
        console.log("Error send request", error);
        res.status(500).json({message: error.message});
    }

}