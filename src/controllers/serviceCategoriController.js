import ServiceCategories from "../models/ServiceCategories.js"
import { isAdmin } from "../userType.js"

export  function createServiceCategory(req,res){

    if(!isAdmin(req)){
        res.json({
            message: "Please login as an admin to add blogs.!" 
        })
        return
    }

    const newServiceListData = req.body

    const serviceCategory = new ServiceCategories(newServiceListData)

    serviceCategory.save().then(()=>{
        res.json({
            message: "Category added..!"
        })
    }).catch((error)=>{
        console.log(error)
        res.status(403).json({
            message: error
        })
    })

}


export function getServiceCategories(req,res){
    ServiceCategories.find({}).then((serviceCat)=>{
        res.json(serviceCat)
    })
}