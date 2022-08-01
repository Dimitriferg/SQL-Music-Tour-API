'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meet_greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  meet_greet.init({
    event_id: DataTypes.INTEGER,
    band_id: DataTypes.INTEGER,
    meet_greet_start_time: DataTypes.DATE,
    meet_greet_end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'meet_greet',
  });
  return meet_greet;
};