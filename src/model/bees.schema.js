'use strict';

const { BeeModel } = require('.');
const sequelize = require('sequelize');


export default (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define(('bees', BeeModel), {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    family: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    temperament: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nests: {
      type: DataTypes.STRING,
      allowNull: true,
    },

  });
};
