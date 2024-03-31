import express from 'express';
import { login, register } from '../controllers/authenticaton.controller.js';

const authenticationRouter = express.Router();

// Register API
authenticationRouter.post('/register', register);
// Login API
authenticationRouter.post('/login',login);
// Logout API


export default authenticationRouter;