const express = require('express');
const router = express.Router();
import register from './register';
import login from './login';
import refresh from './refresh';
import logout from './logout';
import userDetails from './userDetails';

router.use('/auth/register', register);
router.use('/auth/login', login);
router.use('/auth/refresh', refresh);
router.use('/auth/logout', logout);
router.use('/auth/me', userDetails);

export default router;