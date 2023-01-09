'use strict';

//change route once changed
import express, { json } from 'express';
// import notFound from './middleware/error-handlers/404';
// import errorHandler from './middleware/error-handlers/500';
import logger from './middleware/logger';
import validator from './middleware/validator';
// import BeesModel from './routes/bees';
// import FlowersModel from './routes/flowers';
import customRoutes from './model/index';


const PORT = process.env.PORT || 5432;

const sequelize = require('sequelize');

// const { BeesModel } = require('../src/model/bees.schema');
// const { FlowersModel } = require('../src/model/flowers.schema');
// const customRoutes = express.Router();


const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

// const express = require('express');
const app = express();
const customRoutes = require('./routes.js');

app.use(logger);
app.use(validator);

app.use(json());
app.use(beesData);
app.use(flowersData);
app.use('/custom', customRoutes);


app.get('./', (req, res) => {  res.status(200).send('Hello Planet Ambassadors');
});

app.get('/bad', (req, res, next) => { next('Oops bad route');
});

app.get('/bees', (req, res, next) => { let { beesName } = req.query;
// console.log('beesName', beesName);

  try {
    if (beesName) {
      res.status(200).json(`${beesName} is the bees knees`);
    } else {
      res.status(200).send(`Save the bees!`);
    }
  } catch (err) {
    next(err.message);
  }
});


app.get('/flowers', (req, res, next) => { let { flowersName } = req.query;

  try {
    if (flowersName) {
      res.status(200).json(`${flowersName} grow where planted`);
    } else {
      res.status(200).send(`Grow On!`);
    }
  } catch (err) {
    next(err.message);
  }
});



app.use('*', notFound);

app.use(errorHandler);


function start() {
  app.listen(PORT, () => console.log('listening on port', PORT));
}

export default { app, start };
