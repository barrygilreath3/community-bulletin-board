const { Model, DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');
const sequelize = require("../config/connection");

class User_Accounts extends Model { 
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

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
    hooks: {
      beforeCreate: async (newUserAccountData) => {
        newUserAccountData.password = await bcrypt.hash(newUserAccountData.password, 10);
        return newUserAccountData;
      },
      beforeBulkCreate: async (newUserAccountData) => {
        for (const data of newUserAccountData) {
          data.password = await bcrypt.hash(data.password, 10);
        }
        return newUserAccountData;
      } 
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user_accounts",
  }
);

module.exports = User_Accounts;
