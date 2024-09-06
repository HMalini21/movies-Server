const express = require('express');
const router = express.Router();
const { signUp, Login, getUser } = require('../controller/user.controller');

router.post('/signUp', signUp);
router.post('/login', Login);
router.get('/account', getUser);

module.exports = router;
