const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Vote, GameList, Game } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
  Game.findAll({
    attributes: [
      'game_title',
      'id',
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

router.get('/:id', withAuth,(req, res) => {

  Game.findAll({
    attributes: [
      'game_title',
      'list_id',
      'created_at',
      //[sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    where: {
      id: req.params.id
    }
  })
    .then(dbGameData => res.json(dbGameData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/:list_id', withAuth,(req, res) => {
  Game.create({
    game_title: req.body.game_title,
    list_id: req.params.list_id
  })
    .then(dbGameData => res.json(dbGameData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth,(req, res) => {
  Game.update({
    game_title: req.body.game_title
  },
    {
      where: {
        id: req.params.id
      }
    })
    .then(dbGameData => {
      if (!dbGameData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbGameData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Game.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbGameData => {
      if (!dbGameData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbGameData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;