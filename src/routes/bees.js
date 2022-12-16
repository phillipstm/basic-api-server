'use strict';

const express = require('express');
const { BeeModel } = require('../model/bees.schema');

const router = express.beesRouter();

router.get('/bees', (req, res) => {
  const data = {
    fromParam: req.params.beeName,
    fromReq: req.beeName,
  };
});

router.post('/bee', async (req, res, send) => {
  console.log('req body', req.body);

  const newBee = await BeeModel.create(req.body);
  res.status(200).send(newBee);
});

module.exports = router;
