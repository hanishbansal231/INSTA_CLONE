import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();

app.use(cookieParser());
app.use(express.json({ limit: '16kb' }));
app.use(express.static('public'));
app.use(cors({
    origin: '*', // Replace with specific trusted origins
}));
app.use(morgan('combined')); // Adjust for production logging

const httpServer = createServer(app);
const io = new Server(httpServer, {
    serveClient: true,
});

io.on('connection', (socket) => {
    console.log(`Socket Connected -> ${socket.id}`);
});

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


export default httpServer;