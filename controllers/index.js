const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const gamelistRoutes = require('./gamelist-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/gamelist', gamelistRoutes)

module.exports = router;
