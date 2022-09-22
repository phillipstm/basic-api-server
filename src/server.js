'use strict';
//change route once changed
const express = require('express');
const BeesRouter = require('./routes/bees');
const FlowersRouter = require('./routes/flowers');

const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(router);

function start(){
    app.listen(PORT, () => console.log('listening on port', PORT));
}

module.exports = { app, start };