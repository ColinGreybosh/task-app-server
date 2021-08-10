import express from 'express';

import * as login from './login';
import * as users from './users';
import * as tasks from './tasks';
import * as sessions from './sessions';

const router: express.Router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello, world!');
});

router.use(login.router);
router.use(users.router);
router.use(tasks.router);
router.use(sessions.router);

export default router;
