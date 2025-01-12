module.exports = function model(sequelize, types) {
  const Category = sequelize.define(
    'Category',
    {
      id: {
        allowNull: false,
        type: types.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      category: {
        type: types.TEXT,
      },
    },
    {
      tableName: 'categories',
      timestamps: false,
    },
  );

  Category.associate = (models) => {
    Category.belongsToMany(models.Movie, {
      through: models.CatMovie,
      foreignKey: 'categoryId',
      otherKey: 'movieId',
      as: 'movies',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };

  return Category;
};
