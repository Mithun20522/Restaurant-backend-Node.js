import express from 'express';
import { addRestaurent, deleteRestaurent, getRestaurent, getRestaurents, updateRestaurent } from '../controllers/restaurent.controller.js';
import { verifyToken } from '../middlewares/user.middleware.js';

const restaurentRouter = express.Router();

restaurentRouter.post('/add-restaurent', verifyToken, addRestaurent);
restaurentRouter.get('/get-restaurents', verifyToken, getRestaurents);
restaurentRouter.get('/get-restaurent/:id', verifyToken, getRestaurent);
restaurentRouter.patch('/update-restaurent/:id',verifyToken, updateRestaurent);
restaurentRouter.delete('/delete-restaurent/:id',verifyToken, deleteRestaurent);

export default restaurentRouter;