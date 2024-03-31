import express from 'express';
import { getUsers } from '../controllers/user.controller.js';
import { verifyToken } from '../middlewares/user.middleware.js';

const userRouter = express.Router();

userRouter.get('/get-users',verifyToken,getUsers);

export default userRouter;