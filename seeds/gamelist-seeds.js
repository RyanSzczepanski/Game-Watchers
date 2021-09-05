const { GameList, Game} = require('../models');

const gamelistdata = [
  {
    title: 'FPS Games',
    user_id: 10,
  },
  {
    title: 'Survival Games',
    user_id: 8
  },
  {
    title: 'Up and Coming Games With a Super Long Title',
    user_id: 1
  },
  {
    title: 'Management Games',
    user_id: 4
  },
  {
    title: 'Racing Games',
    user_id: 7
  },
];

const seedGameLists = () => GameList.bulkCreate(gamelistdata);

module.exports = seedGameLists;
