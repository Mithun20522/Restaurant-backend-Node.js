import express from 'express';
import { createOrder, deleteOrder, getAllOrders, updateOrder} from '../controllers/order.controller.js';
import { verifyToken } from '../middlewares/user.middleware.js';

const orderRouter = express.Router();

orderRouter.post('/create-order', createOrder);
orderRouter.get('/get-orders', verifyToken, getAllOrders);
orderRouter.patch('/update-order/:id', verifyToken, updateOrder);
orderRouter.delete('/delete-order/:id', verifyToken, deleteOrder);

export default orderRouter;