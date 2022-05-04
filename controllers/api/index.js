const router = require('express').Router();
const home = require('./home-routes');
const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes');

router.use('/', home);
router.use('/post', postRoutes);
router.use('/user', userRoutes);

module.exports = router;
