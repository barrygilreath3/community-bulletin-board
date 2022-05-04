const router = require('express').Router();
const apiRoutes = require('./api');

//what we're doing here is telling the router
//to look in /api for a file 'index.js' (the default)
//inside that file, we use the routes from the api, combining them in a central place.
router.use('/', apiRoutes);

//exporting the routes we've added to the router
module.exports = router;
