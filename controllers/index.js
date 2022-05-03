const router = require('express').Router();
const apiRoutes = require('./api');
const home = require('./home');

//write routes here
//we can also import routes from other files. i would recommend breaking them up by feature.
//example: 
//if i have a file called homeRoutes.js, which contains a route to the homepage,
//i can import that file here like so,
//const homeRoutes = require ('./homeRoutes');
//router.use('/', homeRoutes);
//so, let's get the homepage
//this adds the routes we define in the "home" file to our router
router.use('/', home);
router.use('/api', apiRoutes);

//exporting the routes we've added to the router
module.exports = router;
