const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Vote, GameList, Game } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', /*withAuth,*/ (req, res) => {
    // try { parseInt(req.params.list_id) }
    // catch { return; }
    Game.create({
      game_title: req.body.game_title,
      list_id: req.body.list_id
      //list_id: parseInt(req.params.list_id)
    })
      .then(dbGameData => res.json(dbGameData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/', /*withAuth,*/ (req, res) => {
    Game.findAll({
        attributes: [
          'game_title',
          'list_id',
          'created_at',
          //[sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        ],
      })
        .then(dbGameData => res.json(dbGameData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });

  router.get('/:listid', /*withAuth,*/ (req, res) => {
    Game.findAll({
        attributes: [
          'game_title',
          'list_id',
          'created_at',
          //[sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        ],
        where:{
            list_id: req.params.listid
        }
      })
        .then(dbGameData => res.json(dbGameData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });

    module.exports = router;