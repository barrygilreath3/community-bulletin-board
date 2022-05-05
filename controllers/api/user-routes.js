const router = require('express').Router();
const { User_Accounts } = require('../../models');

//create new user
router.post('/', async (req, res) => {
  try {
    const userData = await User_Accounts.create(req.body);

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
    //pull user account by username
    const userData = await User_Accounts.findOne({ where: { username: req.body.username } });
    //check if it exists
    if (!userData) {
      res
        .status(400)
        .json({ message: 'No account found matching username.' });
      return;
    }
    //compare password
    const validPassword = (userData.password === req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password.' });
      return;
    }
    else {
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        res.json({ user: userData, message: 'Successfully logged in!' });
      });
    }
  } 
  catch (err) {
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