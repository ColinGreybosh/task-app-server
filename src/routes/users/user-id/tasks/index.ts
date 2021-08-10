import express from 'express';

const router: express.Router = express.Router();

router.post('/', (req, res) => {
    // Create new task for this user
    throw new Error("Unimplemented!");
});

router.get('/', (req, res) => {
    // Retrieve all tasks for this user
    throw new Error("Unimplemented!");
});

router.put('/', (req, res) => {
    // Bulk update of this user's tasks
    throw new Error("Unimplemented!");
});

router.delete('/', (req, res) => {
    // Remove all of this user's tasks
    throw new Error("Unimplemented!");
});

export { router };
