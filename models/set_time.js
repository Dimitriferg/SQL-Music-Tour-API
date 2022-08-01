'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  set_time.init({
    event_id: DataTypes.INTEGER,
    stage_id: DataTypes.INTEGER,
    set_time_start: DataTypes.DATE,
    set_time_end: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'set_time',
  });
  return set_time;
};