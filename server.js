import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


const PORT = process.env.PORT || 3000;

app.get('/',(req, res) => {
    return res.json({message: 'Test API'});
})

app.listen(PORT, () => {
    console.log(`server is listening at PORT: ${PORT}`.white.bgBlue);
})
