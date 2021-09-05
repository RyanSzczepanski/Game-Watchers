const { GameList } = require('../models');

const gamelistdata = [
  {
    title: 'FPS Games',
    user_id: 1
  },
  {
    title: 'Survival Games',
    user_id: 1
  },
  {
    title: 'Up and Coming Games With a Super Long Title',
    user_id: 1
  },
  {
    title: 'Management Games',
    user_id: 1
  },
  {
    title: 'Racing Games',
    user_id: 1
  }
];

const seedGameLists = () => GameList.bulkCreate(gamelistdata);

module.exports = seedGameLists;
