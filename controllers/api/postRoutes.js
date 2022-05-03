const router = require('express').Router();
const { postTemp } = require('../../models'); //change to match export from model
const authorized = require('../../utils/authorize');


//adding a new post
router.post('/', authorized, async (req, res) => {
    try {
        const newPost = await postTemp.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});


//deleting a post
router.delete('/:id', authorized, async (req, res) => {
    try {
        const postData = await postTemp.destroy({
            where: {
                id: req.params.id,
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
