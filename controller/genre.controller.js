const db = require('../sequize-config');

const getMoviesByGenreAndCategory = async (req, res, next) => {
  let genre, catry;
  if (req.query) {
    genre = req.query.genre;
    catry = req.query.catry;
  } else {
    genre = 1;
    catry = 5;
  }
  try {
    const results = await db.sequelize.query(
      `SELECT m.* FROM movies m INNER JOIN genere_movie gm ON m.id = gm.movieId INNER JOIN cat_movie cm ON m.id = cm.movieId WHERE gm.genereId = ${genre} AND cm.categoryId = ${catry};`,
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
  getMoviesByGenreAndCategory,
};
