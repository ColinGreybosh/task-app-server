import express from 'express';

const router: express.Router = express.Router();

router.post('/', (req, res) => {
    // Error
    throw new Error("Unimplemented!");
});

router.get('/', (req, res) => {
    // Retrieve session details
    throw new Error("Unimplemented!");
});

router.put('/', (req, res) => {
    // Update this session's details if it exists
    throw new Error("Unimplemented!");
});

router.delete('/', (req, res) => {
    // Remove this session
    throw new Error("Unimplemented!");
});

export { router };
