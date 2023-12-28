import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));


app.use(cookieParser());
app.use(express.json({ limit: '16kb' }));
app.use(express.static('public'));
app.use(morgan('dev'));


// Import Routes
import userRoute from './routes/userRoute.js';
import postImageRoute from './routes/postImageRoute.js';

// Declare Routes
app.use('/api/v1/user', userRoute);
app.use('/api/v1/image', postImageRoute);

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'WELCOME INSTA CLONE...',
    });
});

app.all('*', (req, res) => {
    return res.status(404).json({
        message: 'Oops! Page not found...',
    });
});


export default app;