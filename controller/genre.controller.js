const db = require('../sequize-config');

const getFantasyMovies = async (req, res, next) => {
  try {
    const results = await db.sequelize.query(
      'SELECT * FROM movies m INNER JOIN gen_movie gm ON m.id = gm.movieId WHERE gm.genereId = 1',
      {
        type: db.Sequelize.QueryTypes.SELECT,
        raw: true, // Return raw data, rather than objects
      },
    );

    res.status(200).json({ message: results });
  } catch (error) {
    console.error('Error fetching fansty movies:', error);
    res.status(400).json({ error: error, message: error.message });
  }
};

const getScifiMovies = async (req, res, next) => {
  try {
    const results = await db.sequelize.query(
      'SELECT * FROM movies m INNER JOIN gen_movie gm ON m.id = gm.movieId WHERE gm.genereId = 2',
      {
        type: db.Sequelize.QueryTypes.SELECT,
        raw: true, // Return raw data, rather than objects
      },
    );

    res.status(200).json({ message: results });
  } catch (error) {
    console.error('Error fetching Sci-fi movies:', error);
    res.status(400).json({ error: error, message: error.message });
  }
};

const getRomComMovies = async (req, res, next) => {
  try {
    const results = await db.sequelize.query(
      'SELECT * FROM movies m INNER JOIN gen_movie gm ON m.id = gm.movieId WHERE gm.genereId = 3',
      {
        type: db.Sequelize.QueryTypes.SELECT,
        raw: true, // Return raw data, rather than objects
      },
    );

    res.status(200).json({ message: results });
  } catch (error) {
    console.error('Error fetching Romcom movies:', error);
    res.status(400).json({ error: error, message: error.message });
  }
};

const getThrillerMovies = async (req, res, next) => {
  try {
    const results = await db.sequelize.query(
      'SELECT * FROM movies m INNER JOIN gen_movie gm ON m.id = gm.movieId WHERE gm.genereId = 4',
      {
        type: db.Sequelize.QueryTypes.SELECT,
        raw: true, // Return raw data, rather than objects
      },
    );

    res.status(200).json({ message: results });
  } catch (error) {
    console.error('Error fetching Thriller Movies:', error);
    res.status(400).json({ error: error, message: error.message });
  }
};

const getHorrorMovies = async (req, res, next) => {
  try {
    const results = await db.sequelize.query(
      'SELECT * FROM movies m INNER JOIN gen_movie gm ON m.id = gm.movieId WHERE gm.genereId = 5',
      {
        type: db.Sequelize.QueryTypes.SELECT,
        raw: true, // Return raw data, rather than objects
      },
    );
    res.status(200).json({ message: results });
  } catch (error) {
    console.error('Error fetching Horror Movies:', error);
    res.status(400).json({ error: error, message: error.message });
  }
};

const getComedyMovies = async (req, res, next) => {
  try {
    const results = await db.sequelize.query(
      'SELECT * FROM movies m INNER JOIN gen_movie gm ON m.id = gm.movieId WHERE gm.genereId = 6',
      {
        type: db.Sequelize.QueryTypes.SELECT,
        raw: true, // Return raw data, rather than objects
      },
    );

    res.status(200).json({ message: results });
  } catch (error) {
    console.error('Error fetching Comedy Movies:', error);
    res.status(400).json({ error: error, message: error.message });
  }
};
module.exports = {
  getFantasyMovies,
  getScifiMovies,
  getRomComMovies,
  getThrillerMovies,
  getHorrorMovies,
  getComedyMovies,
};
