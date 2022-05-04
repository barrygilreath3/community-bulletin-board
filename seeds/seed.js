const sequelize = require('../config/connection');
const { User_Accounts, Bulletin_Posts } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User_Accounts.bulkCreate(userData);

  await Bulletin_Posts.bulkCreate(postData);

  console.log('\n----- DATABASE SYNCED -----\n');
  process.exit(0);
};

seedAll();
