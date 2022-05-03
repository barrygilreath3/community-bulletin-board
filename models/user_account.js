const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class User_Accounts extends Model {}

User_Accounts.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    account_crtd_date: {
      type: DataTypes.DATE,
    },
    account_voidtime: {},
    account_type: {},
  },
  {
    sequelize,
    timestamps: false,

    underscored: true,
    modelName: "User_Accounts",
  }
);

module.exports = user_accounts;
