import express from 'express';
import { login, logout, register } from '../controllers/authenticaton.controller.js';

const authenticationRouter = express.Router();

authenticationRouter.post('/register', register);
authenticationRouter.post('/login',login);
authenticationRouter.get('/logout', logout);

export default authenticationRouter;