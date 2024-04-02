import express from 'express';
import { createOrder, getAllOrders } from '../controllers/order.controller.js';
import { verifyToken } from '../middlewares/user.middleware.js';

const orderRouter = express.Router();

orderRouter.post('/create-order', createOrder);
orderRouter.get('/get-orders', verifyToken, getAllOrders);

export default orderRouter;