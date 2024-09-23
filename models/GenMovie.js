module.exports = function model(sequelize, types) {
  const GenreMovie = sequelize.define(
    'GenreMovie',
    {
      id: {
        allowNull: false,
        type: types.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      genereId: {
        type: types.INTEGER,
        references: {
          model: 'Genre',
          key: 'id',
        },
      },
      MovieId: {
        type: types.INTEGER,
        references: {
          model: 'Movie',
          key: 'id',
        },
      },
    },
    {
      tableName: 'genere_movie',
      timestamps: false,
    },
  );
  return GenreMovie;
};
