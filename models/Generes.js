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
  return Genre;
};
