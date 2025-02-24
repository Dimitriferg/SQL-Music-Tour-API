"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bands extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ MeetGreet }) {
      bands.hasMany(MeetGreet, {
        foreignKey: "band_id",
        as: "meet_greet",
      });
    }
  }
  bands.init(
    {
      band_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      genre: DataTypes.TEXT,
      available_start_time: DataTypes.DATE,
      end_time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "bands",
    }
  );
  return bands;
};
