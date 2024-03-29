import express from 'express';

import * as userId from './user-id';

const router: express.Router = express.Router();

router.post('/', (req, res) => {
    // Create new user
    throw new Error("Unimplemented!");
});

router.get('/', (req, res) => {
    // Error
    throw new Error("Unimplemented!");
});

router.put('/', (req, res) => {
    // Bulk update of users
    throw new Error("Unimplemented!");
});

router.delete('/', (req, res) => {
    // Error
    throw new Error("Unimplemented!");
});

router.use('/:userId', userId.router);

export { router };
