import express from 'express';
import { creatAdmin, createCustomer, loginUser } from '../controllers/userController.js';
import { serviceOwnerRegistration } from '../controllers/serviceOwnerReg.js';

const userRouter = express.Router();

userRouter.post("/admin",creatAdmin);
userRouter.post("/signup",createCustomer);
userRouter.post("/login",loginUser);
userRouter.post("/serviceOwnerRegister",serviceOwnerRegistration);


export default userRouter;