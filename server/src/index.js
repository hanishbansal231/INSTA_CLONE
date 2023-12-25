import httpServer from './app.js';
import dbConnection from './config/db.Connection.js';
import { config } from 'dotenv';

config({
    path: './env'
});

const PORT = process.env.PORT || 8080;

dbConnection()
    .then(() => {
        httpServer.listen(PORT, () => {
            console.log(`Server is running at port: http://localhost:${PORT}/`);
        });
    })
    .catch((error) => {
        console.log('MONGODB CONNECTION FAILED -> ', error);
        process.exit(1);
    })