const router = require('express').Router();
const { Bulletin_Posts, User_Accounts } = require('../../models'); //change to match models
const authorized = require('../../utils/authorize');

//dummy post data test
const posts = [{
    postTitle: "Test Post 1",
    username: "testauthor1",
    postTime: Date.now()
},{
    postTitle: "Test Post 2",
    username: "testauthor2",
    postTime: Date.now()
}];

//get bulletin posts and render homepage
// router.get('/', async (req, res) => {
//     try {
//         // Get all bulletin posts and JOIN with user data
//         const postData = await Bulletin_Posts.findAll({
//             include: [
//                 {
//                     model: User_Accounts,
//                     attributes: ['username'],
//                 },
//             ],
//         });

//         // Serialize data so the template can read it
//         const posts = postData.map((post) => post.get({ plain: true }));

//         // Pass serialized data and session flag into template
//         res.render('home', {
//             posts,
//             logged_in: req.session.logged_in
//         });
//     } catch (err) {}
// });

//get homepage
router.get('/', async (req, res) => {
    try {
        res.render('home', {posts});
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//if we make a separate homepage for being logged in
// router.get('/loggedIn', authorized, async (req, res) => {
//     try {
//         // Find the logged in user based on the session ID
//         const userData = await User_Accounts.findByPk(req.session.user_id, {
//             attributes: { exclude: ['password'] },
//             include: [{ model: Bulletin_Posts }],
//         });

//         const user = userData.get({ plain: true });

//         res.render('loggedIn', {
//             ...user,
//             logged_in: true
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;