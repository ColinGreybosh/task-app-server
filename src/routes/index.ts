import express from 'express';

import * as login from './login';
import * as users from './users';
import * as tasks from './tasks';
import * as sessions from './sessions';
import { logger } from '../logging';

const router: express.Router = express.Router();

router.use((req, res, next) => {
    logger.info(`Request received: ${req.method} ${req.url} ${req.path}`);
    next();
});

router.get('/', (req, res) => {
    res.send('Hello, world!');
});

router.use(`/login`, login.router);
router.use(`/users`, users.router);
router.use(`/tasks`, tasks.router);
router.use(`/sessions`, sessions.router);

export default router;
