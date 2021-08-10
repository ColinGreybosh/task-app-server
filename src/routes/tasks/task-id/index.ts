import express from 'express';

const router: express.Router = express.Router();

router.post('/', (req, res) => {
    // Error
    throw new Error("Unimplemented!");
});

router.get('/', (req, res) => {
    // Retrieve task details
    throw new Error("Unimplemented!");
});

router.put('/', (req, res) => {
    // Update this task's details if it exists
    throw new Error("Unimplemented!");
});

router.delete('/', (req, res) => {
    // Remove this task
    throw new Error("Unimplemented!");
});

export { router };
