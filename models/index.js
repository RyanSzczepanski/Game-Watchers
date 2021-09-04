// import all models
const User = require('./User');
const Game = require('./Game');
const GameList = require('./GameList');

// create associations

//User
User.hasMany(GameList, {
  foreignKey: 'user_id'
});


//GameList
GameList.hasMany(Game, {
  foreignKey: 'list_id'
})

GameList.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
})

//Game
Game.belongsTo(GameList, {
  foreignKey: 'list_id',
  onDelete: 'SET NULL'
})

module.exports = { User, Game, GameList };
