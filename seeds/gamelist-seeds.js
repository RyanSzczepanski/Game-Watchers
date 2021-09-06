const { GameList } = require('../models');

const gamelistdata = [
  {
    title: 'FPS Games',
    user_id: 11
  },
  {
    title: 'Survival Games',
    user_id: 11
  },
  {
    title: 'Up and Coming Games With a Super Long Title',
    user_id: 7
  },
  {
    title: 'Management Games',
    user_id: 11
  },
  {
    title: 'Racing Games',
    user_id: 5
  }
];

const seedGameLists = () => GameList.bulkCreate(gamelistdata);

module.exports = seedGameLists;
