//To make sure the user is logged in to access a feature

const authorized = (req, res, next) => {

    if (!req.session.logged_in) {
        alert('Please login to use this feature') //temp. May want to change to open the login overlay
    } else {
        next();
    }
};

module.exports = authorized;