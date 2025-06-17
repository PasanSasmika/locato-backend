import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import userRouter from './routes/userRoutes.js';
import serviceReqRouter from './routes/serviceReqRoute.js';
import job from './lib/corn.js';
import serviceCatRouter from './routes/serviceCatRoute.js';

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
job.start();
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

app.listen(
  5000,
  ()=>{
    console.log('Server is running on port 5000');
  }
)
