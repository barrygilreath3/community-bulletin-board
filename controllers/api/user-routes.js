const router = require('express').Router();
const { User_Accounts } = require('../../models');

//create new user
router.post('/', async (req, res) => {
  var userObj = {
    "username" : req.body.username,
    "password" : req.body.password,
    "account_crtd_date" : "2022-05-02",
    "account_voidtime" : null,
    "account_type" : 0
  }
  const userData = await User_Accounts.create(userObj);

  req.session.save(() => {
    req.session.user_id = userData.id;
    req.session.logged_in = true;

    res.status(200).json(userData);
  });
  try {
    
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
    const validPassword = await userData.checkPassword(req.body.password);

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
      res.json('Successfully logged out!')
      res.status(204).end();
    });
  } else {
    res.status(204).end();
  }
});

module.exports = router;