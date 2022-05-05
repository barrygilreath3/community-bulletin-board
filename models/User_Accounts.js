const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class User_Accounts extends Model { }

User_Accounts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    account_crtd_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    account_voidtime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    account_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user_accounts",
  }
);

module.exports = User_Accounts;
