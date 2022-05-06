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
            order: [['post_date', 'DESC']]
        });
        const posts = postData.map((post) => post.get({ plain: true }));


        //check user session cookie.
        //no matter what, we are gonna save the session to the store.
        req.session.save(async () => {
            if (req.session.logged_in) {
                //if we're logged in, we need to grab the username.
                var userAcc = await User_Accounts.findOne({ where: { id: req.session.user_id } });
                //render logged in version of the page with updated nav.
                var loginData = {
                    posts: posts,
                    username: userAcc.username
                };
                res.render('userhome', {
                    loginData
                });
            }
            else {
                //compile homepage
                // var source = document.querySelector('#nav-login-btn').innerHTML;
                //render standard homepage

                res.render('home', {
                    posts // Pass serialized data and session flag into template
                });
            }

        });
    } catch (err) { }
});


module.exports = router;