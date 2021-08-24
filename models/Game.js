const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    game_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    list_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'list',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'game'
  }
);

module.exports = Game;
