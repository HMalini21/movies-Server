module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    'Movie',
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 255], // Ensure title is between 1 and 255 characters
        },
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true, // Ensure year is an integer
          min: 1900, // Ensure year is at least 1900
          max: 2100, // Ensure year is at most 2100
        },
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true, // Ensure image is a valid URL
        },
      },
      summary: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 500], // Ensure summary is between 1 and 500 characters
        },
      },
      video: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true, // Ensure video is a valid URL
        },
      },
    },
    {
      tableName: 'movies',
      timestamps: false,
    },
  );

  Movie.associate = (models) => {
    Movie.belongsToMany(models.Category, {
      through: models.CatMovie,
      foreignKey: 'movieId',
      otherKey: 'categoryId',
      as: 'categories',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };

  return Movie;
};
