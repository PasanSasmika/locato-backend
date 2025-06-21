import express from 'express';
import { getserviceRequest, serviceRequest } from '../controllers/serviceReq.js';

const serviceReqRouter = express.Router();

serviceReqRouter.post("/serviceReq", serviceRequest)
serviceReqRouter.get("/serviceReq",getserviceRequest);



export default serviceReqRouter;