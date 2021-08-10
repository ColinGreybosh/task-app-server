import dotenv from 'dotenv';
import express from 'express';
import winston from 'winston';

import router from './routes/index';

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT; // default port to listen

const logDirectory = process.env.LOG_DIRECTORY;

const logger: winston.Logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        // - Write all logs with level `error` and below to `error.log`
        new winston.transports.File({ filename: `${logDirectory}/error.log`, level: 'error' }),
        // - Write all logs with level `info` and below to `combined.log`
        new winston.transports.File({ filename: `${logDirectory}/combined.log` }),
    ],
});

// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

app.use(router);

// start the Express server
app.listen(port, () => {
    logger.info(`server started at http://localhost:${ port }`);
});
