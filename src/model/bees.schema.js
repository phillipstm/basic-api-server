'use strict';

module.exports = (sequelizeDatabase, DataTypes) => { return sequelizeDatabase.define('bees', {
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
