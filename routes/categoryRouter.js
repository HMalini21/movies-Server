const express = require('express');
const { getMovie } = require('../controller/category.controller');
const router = express.Router();

router.get('/', getMovie);

module.exports = router;
