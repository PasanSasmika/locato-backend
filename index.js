import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config()


const app = express();

const mongoUrl = process.env.MONGODB_URI

mongoose.connect(mongoUrl,{})

const connection = mongoose.connection;

connection.once("open",()=>{
  console.log("Database connected");
})

app.use(cors())


app.use(bodyParser.json())


app.listen(
  5000,
  ()=>{
    console.log('Server is running on port 5000');
  }
)
