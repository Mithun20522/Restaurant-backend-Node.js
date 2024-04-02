import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import colors from 'colors';
import cookieParser from 'cookie-parser';
import connectMongoDB from './database/mongoDB.js';
import authenticationRouter from './routes/authentication.route.js';
import userRouter from './routes/user.route.js';
import restaurentRouter from './routes/restaurent.route.js';
import orderRouter from './routes/order.route.js';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

connectMongoDB(MONGODB_URI);

app.get('/',(req,res) => {
    return res.json({message:'Test API working fine.'});
})

app.use('/api/auth', authenticationRouter);
app.use('/api/user',userRouter);
app.use('/api/restaurant',restaurentRouter);
app.use('/api/order', orderRouter);

app.listen(PORT, () => {
    console.log(`server is listening at PORT: ${PORT}`.white.bgBlue);
})
