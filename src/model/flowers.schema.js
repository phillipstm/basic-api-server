'use strict';

import sequelize = require('sequelize');


export default (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('flowers', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    benefit: {
      type: DataTypes.STRING,
      allowNull: true,
    },

  });
};
