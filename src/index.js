import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import userRouter from './routes/userRoutes.js';
import serviceReqRouter from './routes/serviceReqRoute.js';
// import job from './lib/corn.js';
import serviceCatRouter from './routes/serviceCatRoute.js';
import tuitionRouter from './routes/DashboardRoute/tuitionRoute.js';
import hospitalRouter from './routes/DashboardRoute/hospitalRoute.js';
import labRouter from './routes/DashboardRoute/labRoute.js';
import pharmacyRouter from './routes/DashboardRoute/pharmacyRoute.js';
import doctorRouter from './routes/DashboardRoute/doctorRoute.js';
import ayurvedaRouter from './routes/DashboardRoute/ayruwedhaRoute.js';
import saloonRouter from './routes/DashboardRoute/saloonRoute.js';
import spaRouter from './routes/DashboardRoute/spaRoutes.js';
import gymRouter from './routes/DashboardRoute/gymRoute.js';
import bridalMakeupRouter from './routes/DashboardRoute/bridalMakeupRouter.js';
import homeRepair from './routes/DashboardRoute/homerepair.js';
import supermarketRouter from './routes/DashboardRoute/supermarketRoute.js';
import clothingRouter from './routes/DashboardRoute/clothingRoute.js';
import hardwareRouter from './routes/DashboardRoute/hardwareRoute.js';

dotenv.config()


const app = express();

const mongoUrl = process.env.MONGODB_URI;
if (!mongoUrl) {
  console.error("Missing MONGODB_URI in .env");
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl, {});
    console.log("Database connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
connectDB();

app.use(cors())
// job.start();
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }))

app.use(bodyParser.json())
app.use(
  (req,res,next)=>{

  const token =  (req.header("Authorization"))?.replace("Bearer ", "")
 

  if(token != null){
    jwt.verify(token, process.env.SECRET, (error, decoded)=>{
      if(!error){
        req.user = decoded
      }
    })
  }
  next()
  }
)

app.use("/api/users",userRouter)
app.use("/api/service",serviceReqRouter)
app.use("/api/serviceCat",serviceCatRouter)
app.use("/api/dashboard",tuitionRouter)
app.use("/api/hospitals", hospitalRouter); 
app.use("/api/labs", labRouter); 
app.use("/api/pharmacies", pharmacyRouter); 
app.use("/api/doctors", doctorRouter); 
app.use("/api/ayurveda", ayurvedaRouter); 
app.use("/api/saloons", saloonRouter);
app.use("/api/spas", spaRouter);
app.use("/api/gyms", gymRouter);
app.use("/api/bridal-makeup", bridalMakeupRouter);
app.use("/api/home-repair", homeRepair);
app.use("/api/supermarkets", supermarketRouter);
app.use("/api/clothing", clothingRouter);
app.use("/api/hardware", hardwareRouter);



app.listen(
  5000,
  ()=>{
    console.log('Server is running on port 5000');
  }
)
