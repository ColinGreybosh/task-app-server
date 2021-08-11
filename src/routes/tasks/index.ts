import express from 'express';

import * as taskId from './task-id';

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

router.use('/:taskId', taskId.router);

export { router };
