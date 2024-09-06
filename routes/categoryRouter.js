const express = require('express');
const {
  getTvShows,
  getKdrama,
  getAnime,
  getSeries,
  getHollywood,
  getMovie,
} = require('../controller/category.controller');
const router = express.Router();

router.get('/tvshows', getTvShows);
router.get('/movie', getMovie);
router.get('/kdrama', getKdrama);
router.get('/anime', getAnime);
router.get('/series', getSeries);
router.get('/hollywood', getHollywood);

module.exports = router;
