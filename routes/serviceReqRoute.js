import express from 'express';
import { serviceRequest } from '../controllers/serviceReqCOntroller.js';

const serviceReqRouter = express.Router();

serviceReqRouter.post("/serviceReq",serviceRequest);



export default serviceReqRouter;