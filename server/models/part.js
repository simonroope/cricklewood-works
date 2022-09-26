'use strict';

module.exports = (sequelize, DataTypes) => sequelize.define('Part', {
  
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  part_code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  part_short_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  part_long_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  part_photo_1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  part_category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  part_vehicle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  part_manufacturer: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true
  }
});
