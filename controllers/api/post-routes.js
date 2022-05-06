const router = require('express').Router();
const { Bulletin_Posts } = require('../../models'); //change to match export from model
const authorized = require('../../utils/authorize');


//adding a new post
router.post('/', authorized, async (req, res) => {
    try {
        const userPost = {
            user_id: req.session.user_id,
            post_text: req.body.textContent,
            post_date: new Date().toLocaleDateString(undefined, { month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' }),
        }

        const newPost = await Bulletin_Posts.create(userPost);
        res.status(200).json(newPost);

    } catch (err) {
        res.statusMessage = 'Uh Oh! Something bad happened on our end.'
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
