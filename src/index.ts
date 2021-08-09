import express from 'express';
import winston from 'winston';

const app = express();
const port = 8080; // default port to listen

const logger: winston.Logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        // - Write all logs with level `error` and below to `error.log`
        new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
        // - Write all logs with level `info` and below to `combined.log`
        new winston.transports.File({ filename: './logs/combined.log' }),
    ],
});

// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

// define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Hello world!');
});

// start the Express server
app.listen(port, () => {
    logger.info(`server started at http://localhost:${ port }`);
});