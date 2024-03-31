import express from 'express';
import { addRestaurent, getRestaurents } from '../controllers/restaurent.controller.js';

const restaurentRouter = express.Router();

restaurentRouter.post('/add-restaurent',addRestaurent);
restaurentRouter.get('/get-restaurents',getRestaurents);

export default restaurentRouter;