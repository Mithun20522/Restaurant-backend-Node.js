import express from 'express';
import { getUsers } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.get('/get-users',getUsers);

export default userRouter;