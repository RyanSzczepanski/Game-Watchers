const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {}

Game.init(
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
    game_image_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    list_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'gamelist',
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
