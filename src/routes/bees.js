'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('bees', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    habitat: {
      type: DataTypes.ENUM,
      values: ['they/them', 'she/her', 'he/him'],
      allowNull: true,
    },
  });
};