import express from 'express';
import { login, register } from '../controllers/authenticaton.controller.js';

const authenticationRouter = express.Router();

// Register - POST request
authenticationRouter.post('/register', register);
authenticationRouter.post('/login',login);

export default authenticationRouter;