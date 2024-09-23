const express = require('express');
const { getMoviesByGenreAndCategory } = require('../controller/genre.controller');

const router = express.Router();

router.get('/category-genre', getMoviesByGenreAndCategory);

module.exports = router;
