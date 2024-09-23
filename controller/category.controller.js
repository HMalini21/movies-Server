const db = require('../sequize-config');

const getTvShows = async (req, res, next) => {
  try {
    const results = await db.sequelize.query(
      'SELECT * FROM movies m INNER JOIN cat_movie cm ON m.id = cm.movieId WHERE cm.categoryId = 6',
      {
        type: db.Sequelize.QueryTypes.SELECT,
        raw: true, // Return raw data, rather than objects
      },
    );

    res.status(200).json({ message: results });
  } catch (error) {
    console.error('Error fetching TV shows:', error);
    res.status(400).json({ error: error, message: error.message });
  }
};

const getMovie = async (req, res, next) => {
  // let category;
  // if (req.query) {
  let category = req.query.category;
  // } else {
  //   category = 1;
  // }
  try {
    const results = await db.sequelize.query(
      `SELECT * FROM movies m INNER JOIN cat_movie cm ON m.id = cm.movieId WHERE cm.categoryId = ${category}`,
      {
        type: db.Sequelize.QueryTypes.SELECT,
        raw: true, // Return raw data, rather than objects
      },
    );

    res.status(200).json({ message: results });
  } catch (error) {
    console.error('Error fetching Movie:', error);
    res.status(400).json({ error: error, message: error.message });
  }
};

const getAnime = async (req, res, next) => {
  try {
    const results = await db.sequelize.query(
      'SELECT * FROM movies m INNER JOIN cat_movie cm ON m.id = cm.movieId WHERE cm.categoryId = 4',
      {
        type: db.Sequelize.QueryTypes.SELECT,
        raw: true, // Return raw data, rather than objects
      },
    );

    res.status(200).json({ message: results });
  } catch (error) {
    console.error('Error fetching Anime:', error);
    res.status(400).json({ error: error, message: error.message });
  }
};

const getKdrama = async (req, res, next) => {
  try {
    const results = await db.sequelize.query(
      'SELECT * FROM movies m INNER JOIN cat_movie cm ON m.id = cm.movieId WHERE cm.categoryId = 3',
      {
        type: db.Sequelize.QueryTypes.SELECT,
        raw: true, // Return raw data, rather than objects
      },
    );

    res.status(200).json({ message: results });
  } catch (error) {
    console.error('Error fetching kdramas:', error);
    res.status(400).json({ error: error, message: error.message });
  }
};

const getSeries = async (req, res, next) => {
  try {
    const results = await db.sequelize.query(
      'SELECT * FROM movies m INNER JOIN cat_movie cm ON m.id = cm.movieId WHERE cm.categoryId = 6',
      {
        type: db.Sequelize.QueryTypes.SELECT,
        raw: true, // Return raw data, rather than objects
      },
    );

    res.status(200).json({ message: results });
  } catch (error) {
    console.error('Error fetching Series:', error);
    res.status(400).json({ error: error, message: error.message });
  }
};

const getHollywood = async (req, res, next) => {
  try {
    const results = await db.sequelize.query(
      'SELECT * FROM movies m INNER JOIN cat_movie cm ON m.id = cm.movieId WHERE cm.categoryId = 5',
      {
        type: db.Sequelize.QueryTypes.SELECT,
        raw: true, // Return raw data, rather than objects
      },
    );

    res.status(200).json({ message: results });
  } catch (error) {
    console.error('Error fetching Hollywood:', error);
    res.status(400).json({ error: error, message: error.message });
  }
};

module.exports = {
  getTvShows,
  getMovie,
  getAnime,
  getKdrama,
  getSeries,
  getHollywood,
};
