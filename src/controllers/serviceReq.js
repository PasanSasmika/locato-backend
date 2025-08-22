import cloudinary from "../lib/cloudinary.js"
import ServiceReq from "../models/serviceReqModel.js";
import User from "../models/usersModel.js";




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

/**
 * @description Updates the status of a service request ('accepted' or 'rejected')
 * If 'accepted', it also updates the user's type to the service type.
 */
export async function updateServiceRequestStatus(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Basic validation for the status
    if (!status || !['accepted', 'rejected'].includes(status)) {
      return res.status(400).json({ message: "A valid status ('accepted' or 'rejected') is required." });
    }

    // Find the service request and update its status
    const serviceRequest = await ServiceReq.findByIdAndUpdate(id, { status }, { new: true });

    if (!serviceRequest) {
      return res.status(404).json({ message: "Service request not found." });
    }

    // If the request was accepted, find the corresponding user and update their type
    if (status === 'accepted') {
      const userToUpdate = await User.findOne({ email: serviceRequest.email });

      if (userToUpdate) {
        userToUpdate.type = serviceRequest.serviceType; // Update user type
        await userToUpdate.save();
      } else {
        // This case might occur if the user was deleted after making a request
        console.warn(`User with email ${serviceRequest.email} not found for accepted service request.`);
      }
    }

    // Return the updated service request
    res.status(200).json(serviceRequest);
  } catch (error) {
    console.error("Error updating service request status:", error);
    res.status(500).json({ message: "Internal server error while updating status." });
  }
}
