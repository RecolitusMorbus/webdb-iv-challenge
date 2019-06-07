const express = require('express');
// const recipeRouter = require('./routes/router.js')

const knex = require('knex');
// const knexConfig = require('./knexfile.js');

// const db = knex(knexConfig.development);

/* MIDDLEWARE */
const server = express();
server.use(express.json());

/* ROUTER */
// server.use('/api/routes', recipeRouter)

/* SANITY CHECK */
server.get('/', (req, res) => {
    res.send(`YOU READY KIDS?`);
  });

module.exports = server;