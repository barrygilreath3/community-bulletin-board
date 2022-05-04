const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Bulletin_Posts extends Model {}

Bulletin_Posts.init(
  {
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user_account",
        key: "id",
      },
      allowNull: false,
      primaryKey: true,
    },
    post_title: {
      type: DataTypes.STRING,
      allowNull: false,
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
      type: DataTypes.BOOLEAN,
      isLike: true,
    },
    Dislike: {
      type: DataTypes.BOOLEAN,
      isDislike: true,
    },
    post_voidtime: {
      type: DataTypes.dateTime,
      allowNull: false,
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
