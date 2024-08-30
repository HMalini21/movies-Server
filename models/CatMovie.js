// const Category = require('./Category');
const Movie = require('./Movie');

module.exports = function model(sequelize, types) {
  const CatMovie = sequelize.define(
    'CatMovie',
    {
      id: {
        allowNull: false,
        type: types.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      movieId: {
        type: types.INTEGER,
        references: {
          model: 'Movie',
          key: 'id',
        },
      },
      categoryId: {
        type: types.INTEGER,
        references: {
          model: 'Category',
          key: 'id',
        },
      },
    },
    {
      tableName: 'cat_movie',
      timestamps: false,
    },
  );
  return CatMovie;
};
