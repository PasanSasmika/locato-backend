import express from 'express';
import { serviceRequest } from '../controllers/serviceReq.js';

const serviceReqRouter = express.Router();

serviceReqRouter.post("/serviceReq", serviceRequest)
serviceReqRouter.get("/serviceReq",serviceRequest);



export default serviceReqRouter;