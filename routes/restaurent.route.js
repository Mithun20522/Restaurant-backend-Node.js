import express from 'express';
import { addRestaurent } from '../controllers/restaurent.controller.js';

const restaurentRouter = express.Router();

restaurentRouter.post('/add-restaurent',addRestaurent);

export default restaurentRouter;