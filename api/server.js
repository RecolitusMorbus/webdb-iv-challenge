const express = require('express');
const recipeRouter = require('../routes/recipeRouter.js');
const dishRouter = require('../routes/dishRouter.js');

/* MIDDLEWARE */
const server = express();
server.use(express.json());

/* ROUTER */
server.use('/recipes', recipeRouter);
server.use('/dishes', dishRouter);

/* SANITY CHECK */
server.get('/', (req, res) => {
  res.send(`ARE YOU READY KIDS?`);
});

module.exports = server;