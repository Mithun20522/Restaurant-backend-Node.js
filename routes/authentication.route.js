import express from 'express';
import { login, logout, register } from '../controllers/authenticaton.controller.js';

const authenticationRouter = express.Router();

// Register API
authenticationRouter.post('/register', register);
// Login API
authenticationRouter.post('/login',login);
// Logout API
authenticationRouter.get('/logout', logout);

export default authenticationRouter;