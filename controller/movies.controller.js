const { models } = require('../sequize-config');

// Post (Create a new movie)
const addMovies = async (req, res, next) => {
  try {
    const addMovie = await models.Movie.create(req.body);
    res.status(201).json(addMovie);
  } catch (error) {
    return next({
      status: 400,
      message: error.message,
    });
  }
};

// Get One Movie by ID
const getOneMovie = async (req, res, next) => {
  try {
    const getOneMovie = await models.Movie.findOne({
      where: { id: req.params.id },
    });
    if (!getOneMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json(getOneMovie);
  } catch (error) {
    return next({
      status: 400,
      message: error.message,
    });
  }
};
// Get All Movies
const getMovies = async (req, res, next) => {
  try {
    const movies = await models.Movie.findAll(); // Use findAll if count is not needed
    res.json(movies);
  } catch (error) {
    return next({
      status: 400,
      message: error.message,
    });
  }
};

// Update Movie by ID
const updateMovies = async (req, res, next) => {
  try {
    const [affectedCount, updatedMovies] = await models.Movie.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });

    if (affectedCount === 0) {
      return res.status(404).json({ message: 'Movie not found or no changes applied' });
    }

    res.json(updatedMovies[0]); // Return the first updated movie
  } catch (error) {
    return next({
      status: 400,
      message: error.message,
    });
  }
};

// Delete Movie by ID
const deleteMovie = async (req, res, next) => {
  try {
    const deletedMovieCount = await models.Movie.destroy({
      where: { id: req.params.id },
    });

    if (deletedMovieCount === 0) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    res.status(204).json(); // 204 No Content, indicating successful deletion
  } catch (error) {
    return next({
      status: 400,
      message: error.message,
    });
  }
};

module.exports = {
  addMovies,
  updateMovies,
  getOneMovie,
  getMovies,
  deleteMovie,
};
