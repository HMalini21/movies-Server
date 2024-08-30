module.exports = function model(sequelize, types) {
  const User = sequelize.define(
    'User',
    {
      id: {
        allowNull: false,
        type: types.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      userName: {
        type: types.STRING,
        allowNull: false,
      },
      email: {
        type: types.STRING,
        allowNull: false,
      },
      password: {
        type: types.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'users',
      timestamps: false,
    },
  );
  return User;
};
