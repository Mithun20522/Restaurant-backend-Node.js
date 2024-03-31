import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import colors from 'colors';
import cookieParser from 'cookie-parser';
import connectMongoDB from './database/mongoDB.js';
import authenticationRouter from './routes/authentication.route.js';
import userRouter from './routes/user.route.js';
dotenv.config();

// server Initialization
const app = express();

// Some basic middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Importing Senstive information keys
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Connection with database
connectMongoDB(MONGODB_URI);

// API Routes
app.use('/api/auth', authenticationRouter);
app.use('/api/user',userRouter);

// server listening
app.listen(PORT, () => {
    console.log(`server is listening at PORT: ${PORT}`.white.bgBlue);
})
