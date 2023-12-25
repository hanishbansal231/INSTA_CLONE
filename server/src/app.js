import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(cookieParser());
app.use(express.json({ limit: '16kb' }));
app.use(express.static('public'));
app.use(cors({
    origin: '*',
}));
app.use(morgan('combined'));


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