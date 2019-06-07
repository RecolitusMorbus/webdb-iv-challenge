const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
  getRecipes,
  addRecipe,
  update,
  remove
};

function getRecipes() {
  return db('recipes');
};

async function addRecipe(recipe) {
  const [id] = await db('recipes').insert(recipe);
};

function update(id, changes) {
  return null;
};

function remove(id) {
  return null;
};