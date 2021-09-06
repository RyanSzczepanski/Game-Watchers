const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const gamelistRoutes = require('./gamelist-routes');
const gameRoutes = require('./game-routes');

router.use('/users', userRoutes);
router.use('/gamelist', gamelistRoutes);
router.use('/game', gameRoutes);

module.exports = router;
