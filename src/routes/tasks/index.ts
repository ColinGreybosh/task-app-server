import express from 'express';

import { router as taskIdRouter } from './task-id';

const router: express.Router = express.Router();

router.post('/', (req, res) => {
    // Error
    throw new Error("Unimplemented!");
});

router.get('/', (req, res) => {
    // Retrieve all tasks
    throw new Error("Unimplemented!");
});

router.put('/', (req, res) => {
    // Bulk update of tasks
    throw new Error("Unimplemented!");
});

router.delete('/', (req, res) => {
    // Remove all tasks
    throw new Error("Unimplemented!");
});

router.use(/[0-9]+.*/, taskIdRouter);

export { router };
