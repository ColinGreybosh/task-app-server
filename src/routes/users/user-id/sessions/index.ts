import express from 'express';

const router: express.Router = express.Router();

router.post('/', (req, res) => {
    // Create new session for this user
    throw new Error("Unimplemented!");
});

router.get('/', (req, res) => {
    // Retrieve all sessions for this user
    throw new Error("Unimplemented!");
});

router.put('/', (req, res) => {
    // Bulk update of this user's sessions
    throw new Error("Unimplemented!");
});

router.delete('/', (req, res) => {
    // Remove all of this user's sessions
    throw new Error("Unimplemented!");
});

export { router };
