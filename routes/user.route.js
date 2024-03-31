import express from 'express';
import { getUser, getUsers } from '../controllers/user.controller.js';
import { verifyToken } from '../middlewares/user.middleware.js';

const userRouter = express.Router();

userRouter.get('/get-users',verifyToken,getUsers);
userRouter.get('/get-user/:id',verifyToken,getUser);

export default userRouter;