import express from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../middlewares/user.middleware.js';

const userRouter = express.Router();

userRouter.get('/get-users', verifyToken, getUsers);
userRouter.get('/get-user/:id', verifyToken, getUser);
userRouter.delete('/delete-user/:id', verifyToken, deleteUser);
userRouter.patch('/update-user/:id', updateUser);

export default userRouter;