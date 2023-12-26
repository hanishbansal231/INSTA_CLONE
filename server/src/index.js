import app from './app.js';
import dbConnection from './config/db.Connection.js';
import { config } from 'dotenv';
import { Server } from 'socket.io';

config({
    path: './env'
});

const PORT = process.env.PORT || 5001;

dbConnection()
    .then(() => {
        const server = app.listen(PORT, () => {
            console.log(`Server is running at port: http://localhost:${PORT}/`);
        });
        const io = new Server(server, {
            serveClient: true,
        });

        io.on('connection', (socket) => {
            console.log(`Socket Connected -> ${socket.id}`);
        });
        
        io.on('error', (error) => {
            console.error(`Socket Connection Error -> ${error.message}`);
        });
    })
    .catch((error) => {
        console.log('MONGODB CONNECTION FAILED -> ', error);
        process.exit(1);
    });
