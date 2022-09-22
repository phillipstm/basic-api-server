'use strict';

//connet model
const { sequelizeDatabase, BeesModel } = require('./src/models');
const { sequelizeDatabase, FlowersModel } = require('./src/models');

sequelizeDatabase.sync()
    .then(() => {
        console.log('Successful Connection!');
    })

    .catch(err => console.error(err));

//Start();