const seedUsers = require('./user-seeds');
const seedGameLists = require('./gamelist-seeds');
const seedGames = require('./game-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');

  await seedUsers();
  console.log('--------------');

  await seedGameLists();
  console.log('--------------');

  await seedGames();
  console.log('--------------');

  process.exit(0);
};

seedAll();
