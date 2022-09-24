'use strict';

module.exports = (sequelize, DataTypes) => sequelize.define('PartDetail', {
 
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  part_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  part_desc: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  part_photos: {
    type: DataTypes.STRING,
    allowNull: true
  }
 });