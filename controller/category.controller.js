const getTvShows = async (req, res, next) => {
  try {
    const getMovie = await models.Movie.findAll({
      include: [
        {
          model: models.CatMovie, // The model representing the join table
          // as: 'CatMovie', // Alias for the join (optional)
          where: { categoryId: 6 }, // Filtering by categoryId
        },
      ],
    });
    console.log(getMovie);
    res.json(getMovie);
  } catch (error) {
    console.log('errr');
    res.status(400).json({ error: error, message: error.message });
  }
};

module.exports = {
  getTvShows,
};
