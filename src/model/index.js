'use strict';

require('dotenv').config();
const { Sequelize } = require('sequelize');

const bees = require('./bees.schema');
const flowers = require('./flowers.schema').default;

'postgres://localhost:5432/d48-d8-api-app';
'postgres:username:password@localhost:5432/d48-d8-api-app';
// ternary:  WTF  what(conditional) ? return if TRUE : else return if FALSE

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory'
  : process.env.DATABASE_URL;

//initialize database
const sequelizeDatabase = new Sequelize(DATABASE_URL);

const BeeModel = bees(sequelizeDatabase);
const FlowerModel = flowers(sequelizeDatabase);

module.exports = { sequelizeDatabase, BeeModel, FlowerModel };
