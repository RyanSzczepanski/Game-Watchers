const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Vote, GameList, Game } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  console.log('======================');
  GameList.findAll({
    attributes: [
      'id',
      'title',
      'user_id',
      'created_at',
      //[sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
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
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'post_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!', user_id: 1}
  GameList.create({
    title: req.body.title,
    user_id: req.session.user_id
  })
    .then(dbGamelistData => res.json(dbGamelistData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  GameList.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbGamelistData => {
      if (!dbGamelistData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbGamelistData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  GameList.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbGamelistData => {
      if (!dbGamelistData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbGamelistData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;