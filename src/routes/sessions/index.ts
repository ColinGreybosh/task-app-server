import express from 'express';

import { router as sessionIdRouter } from './session-id';

const router: express.Router = express.Router();

router.post('/', (req, res) => {
    // Error
    throw new Error("Unimplemented!");
});

router.get('/', (req, res) => {
    // Retrieve all sessions
    throw new Error("Unimplemented!");
});

router.put('/', (req, res) => {
    // Bulk update of sessions
    throw new Error("Unimplemented!");
});

router.delete('/', (req, res) => {
    // Remove all sessions
    throw new Error("Unimplemented!");
});

router.use(/[0-9]+.*/, sessionIdRouter);

export { router };
