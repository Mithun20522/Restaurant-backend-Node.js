import express from 'express';
import { addRestaurent, deleteRestaurent, getRestaurents } from '../controllers/restaurent.controller.js';

const restaurentRouter = express.Router();

restaurentRouter.post('/add-restaurent',addRestaurent);
restaurentRouter.get('/get-restaurents',getRestaurents);
restaurentRouter.delete('/delete-restaurent/:id',deleteRestaurent);

export default restaurentRouter;