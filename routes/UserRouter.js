const express = require('express');
const router = express.Router();
const { signUp, Login, getUser } = require('../controller/user.controller');
const { isAuthorised } = require('../middlewares/authorization.middleware');

router.post('/signUp', signUp);
router.post('/login', Login);
router.get('/account', isAuthorised, getUser);

module.exports = router;
