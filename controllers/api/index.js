const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const gamelistRoutes = require('./gamelist-routes');
const gameRoutes = require('./game-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/gamelist', gamelistRoutes);
router.use('/game', gameRoutes);

module.exports = router;
