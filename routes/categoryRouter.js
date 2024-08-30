const express = require('express');
const { getTvShows } = require('../controller/category.controller');
const router = express.Router();

router.get('/tvshows', getTvShows);

module.exports = router;
