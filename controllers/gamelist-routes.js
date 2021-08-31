const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote, GameList, Game} = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  GameList.findAll({
    attributes: [
      'id',
      'title',
      'user_id',
      'created_at',
    ],
    include: [
      {
        model: Game,
        attributes: ['id', 'game_title', 'created_at'],
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbGamelistData => {
      const gamelists = dbGamelistData.map(gamelist => gamelist.get({ plain: true }));
      res.render('gamelist',{
        gamelists,
        loggedIn: true
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/view/:list_id', withAuth, (req, res) => {
  GameList.findByPk(req.params.list_id ,{
    attributes: [
      'id',
      'title',
      'user_id',
      'created_at',
    ],
    include: [
      {
        model: Game,
        attributes: ['id', 'game_title', 'created_at'],
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbGamesListData => {
      if (dbGamesListData) {
        const gamelists = dbGamesListData.get({ plain: true });
        res.render('view-gamelist', {
          gamelists,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
  })
module.exports = router;
