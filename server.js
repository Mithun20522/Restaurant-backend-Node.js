import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import connectMongoDB from './database/mongoDB.js';
dotenv.config();

// server Initialization
const app = express();

// Some basic middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Importing Senstive information keys
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Connection with database
connectMongoDB(MONGODB_URI);

// API Routes
app.get('/',(req, res) => {
    return res.json({message: 'Test API'});
})


// server listening
app.listen(PORT, () => {
    console.log(`server is listening at PORT: ${PORT}`.white.bgBlue);
})
