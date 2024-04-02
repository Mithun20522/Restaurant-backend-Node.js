import express from 'express';
import { addRestaurent, deleteRestaurent, getRestaurent, getRestaurents, updateRestaurent } from '../controllers/restaurent.controller.js';
import { verifyToken } from '../middlewares/user.middleware.js';

const restaurentRouter = express.Router();

restaurentRouter.post('/add-restaurant', verifyToken, addRestaurent);
restaurentRouter.get('/get-restaurants', verifyToken, getRestaurents);
restaurentRouter.get('/get-restaurant/:id', verifyToken, getRestaurent);
restaurentRouter.patch('/update-restaurant/:id',verifyToken, updateRestaurent);
restaurentRouter.delete('/delete-restaurant/:id',verifyToken, deleteRestaurent);

export default restaurentRouter;