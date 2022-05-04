const router = require('express').Router();
const { User_Account } = require('../../models');


//create new user
router.post('/', async (req, res) => {
    try {
        const userData = await User_Account.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

//login
router.post('/login', async (req, res) => {
    try {
        const userData = await User_Account.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password.' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password.' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'Successfully logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

//logout
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();

            res.json('Successfully logged out!')
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;