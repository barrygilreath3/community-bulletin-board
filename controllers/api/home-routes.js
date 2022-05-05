const router = require('express').Router();
const { Bulletin_Posts, User_Accounts } = require('../../models'); //change to match models
const authorized = require('../../utils/authorize');

//get bulletin posts and render homepage
router.get('/', async (req, res) => {
    try {
        // Grab the posts and set up the data, we might want to abstract this to its own call.
        const postData = await Bulletin_Posts.findAll({
            include: [
                {// Get all bulletin posts and JOIN with user data
                    model: User_Accounts,
                    attributes: ['username'],
                },
            ],
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        posts.forEach(post => post.post_date = post.post_date.toLocaleString());

        //check user session cookie.
        //no matter what, we are gonna save the session to the store.
        req.session.save(() => {
            if(req.session.loggedIn){
                //render logged in version of the page with updated nav.
            }
            else {
                //render standard homepage
                res.render('home', {
                    posts // Pass serialized data and session flag into template
                });
            }

        });
    } catch (err) { }
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