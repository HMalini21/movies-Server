const express = require('express');
const {
  addMovies,
  updateMovies,
  getOneMovie,
  getMovies,
  deleteMovie,
} = require('../controller/movies.controller');
const router = express.Router();

router.post('/postMovie', addMovies);
router.get('/getOneMovie/:id', getOneMovie);
router.get('/getMovies', getMovies);
router.patch('/updateMovie/:id', updateMovies);
router.delete('/deleteMovie/:id', deleteMovie);

module.exports = router;
