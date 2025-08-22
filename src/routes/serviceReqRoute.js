import express from 'express';
import { getserviceRequest, serviceRequest, updateServiceRequestStatus } from '../controllers/serviceReq.js';

const serviceReqRouter = express.Router();

serviceReqRouter.post("/serviceReq", serviceRequest)
serviceReqRouter.get("/serviceReq",getserviceRequest);
serviceReqRouter.put('/updateStatus/:id', updateServiceRequestStatus);



export default serviceReqRouter;