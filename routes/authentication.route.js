import express from 'express';
import { register } from '../controllers/authenticaton.controller.js';

const authenticationRouter = express.Router();

// Register - POST request
authenticationRouter.post('/register', register);


export default authenticationRouter;