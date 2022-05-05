const router = require('express').Router();
const { Bulletin_Posts } = require('../../models'); //change to match export from model
const authorized = require('../../utils/authorize');
const formatDate = require('../../utils/formatDate');


//adding a new post
router.post('/', async (req, res) => {
    if(req.session.logged_in){
        const userPost = {
            user_id: req.session.user_id,
            post_title: 'PLACEHOLDER',
            post_text: req.body.textContent,
            post_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
            likes: 0,
            dislikes: 0,
            post_voidtime: null,
        }
    }
    try {
        const newPost = await Bulletin_Posts.create(userPost);

        res.status(200).json(newPost);
    } catch (err) {
        res.statusMessage = 'You are not logged in!'
        res.status(400).end();
    }
});


//deleting a post
router.delete('/:id', authorized, async (req, res) => {
    try {
        const postData = await Bulletin_Posts.destroy({
            where: {
                post_id: req.params.post_id,
                user_id: req.session.user_id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: 'No post was found by that ID!' });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
