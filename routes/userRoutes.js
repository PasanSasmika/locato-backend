import express from 'express';
import { creatAdmin, createCustomer, loginUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post("/admin",creatAdmin);
userRouter.post("/signup",createCustomer);
userRouter.post("/login",loginUser);


export default userRouter;