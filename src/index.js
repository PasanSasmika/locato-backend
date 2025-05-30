import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import userRouter from './routes/userRoutes.js';
import serviceReqRouter from './routes/serviceReqRoute.js';
import job from './lib/corn.js';

dotenv.config()


const app = express();

const mongoUrl = process.env.MONGODB_URI

mongoose.connect(mongoUrl,{})

const connection = mongoose.connection;

connection.once("open",()=>{
  console.log("Database connected");
})

app.use(cors())
job.start();


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
app.listen(
  5000,
  ()=>{
    console.log('Server is running on port 5000');
  }
)
