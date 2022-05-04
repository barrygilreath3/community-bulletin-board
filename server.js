const path = require('path')
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
// import sequelize connection
//const sequelize = require('./config/connection.js');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


app.listen(PORT, () => console.log('Server started!'));

// sync sequelize models to the database, then turn on the server
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => {
//   console.log('');
//   console.log(`Now listening on port ${PORT}`);
//   });
// });
