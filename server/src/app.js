import express, { urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(cookieParser());
app.use(express.json({ limit: '16kb' }));
app.use(express.static('public'));
app.use(urlencoded({ limit: '16kb', extended: true }));
app.use(cors());
app.use(morgan('dev'));


app.get('/', (req, res) => {
    return res.status(200).json({
        message: `WELCOME INSTA CLONE...`
    });
});

app.all('*', (req, res) => {
    return res.status(404).json({
        message: `oops!page not found...`
    });
})


export default app;