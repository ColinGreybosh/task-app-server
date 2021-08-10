import express from 'express';

import { router as sessionsRouter } from './sessions';
import { router as tasksRouter } from './tasks';

const router: express.Router = express.Router();

router.post('/', (req, res) => {
    // Error
    throw new Error("Unimplemented!");
});

router.get('/', (req, res) => {
    // Retrieve user details
    throw new Error("Unimplemented!");
});

router.put('/', (req, res) => {
    // Update this user's details if it exists
    throw new Error("Unimplemented!");
});

router.delete('/', (req, res) => {
    // Remove this user
    throw new Error("Unimplemented!");
});

router.use('/tasks', tasksRouter);

router.use('/sessions', sessionsRouter);

export { router };
