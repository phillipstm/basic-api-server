'use strict';

const express = require('express');
const { FlowerModel } = require('../model/flowers.schema').default;

const router = express.Router();

router.get('/flower', (req, res) => {
  const flowerData = {
    fromParam: req.params.flowerData,
  };
});

router.post('/flower', async (req, res, send) => {
  console.log('req body', req.body);

  const newFlower = await FlowerModel.create(req.body);
  res.status(200).send(newFlower);
});

module.exports = router;
