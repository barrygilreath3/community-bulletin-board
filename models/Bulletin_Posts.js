const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Bulletin_Posts extends Model { }

Bulletin_Posts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user_accounts",
        key: "id",
      },
    },
    post_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    Dislike: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    post_voidtime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "bulletin_posts",
  }
);

module.exports = Bulletin_Posts;
