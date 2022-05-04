// index.js
const User_Accounts = require("./User_Accounts");
const Bulletin_Posts = require("./Bulletin_Posts");

User_Accounts.hasMany(Bulletin_Posts, {
  foreignKey: "user_id",
});

Bulletin_Posts.belongsTo(User_Accounts, {
  foreignKey: "user_id",
});

module.exports = { User_Accounts, Bulletin_Posts };
