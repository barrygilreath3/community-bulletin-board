const router = require('express').Router();
const home = require('./home-routes');
const postRoutes = require('./post-routes');

router.use('/', home);
router.use('/post', postRoutes);

module.exports = router;
