module.exports = function model(sequelize, types) {
  const Genre = sequelize.define(
    'Genre',
    {
      id: {
        allowNull: false,
        type: types.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      genere: {
        type: types.TEXT,
      },
    },
    {
      tableName: 'generes',
      timestamps: false,
    },
  );
  Genre.associate = (models) => {
    Genre.belongsToMany(models.Movie, {
      through: models.GenreMovie,
      foreignKey: 'genereId',
      otherKey: 'movieId',
      as: 'movies',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };
  return Genre;
};
