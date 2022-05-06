const path = require('path')
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/formatDate');
const sequelize = require('./config/connection.js');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

const fiveMin = 1000 * 60 * 5;

//set up sessions
const sess = {
    secret: process.env.sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: fiveMin }
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log('');
        console.log(`Now listening on port ${PORT}`);
    });
});
