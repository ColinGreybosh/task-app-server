import express from 'express';

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

export { router };
