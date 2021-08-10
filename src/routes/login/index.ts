import express from 'express';

const router: express.Router = express.Router();

router.post('/', (req, res) => {
    // Attempt to log in
    throw new Error("Unimplemented!");
});

router.get('/', (req, res) => {
    // Retrieve logged in user's details
    throw new Error("Unimplemented!");
});

router.put('/', (req, res) => {
    // Error
    throw new Error("Unimplemented!");
});

router.delete('/', (req, res) => {
    // Log out
    throw new Error("Unimplemented!");
});

export { router };
