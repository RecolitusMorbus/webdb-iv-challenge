const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  getDish,
  addDish,
  update,
  remove
};

function getDishes() {
  return db('dishes');
};

function getDish(id) {
  return db('dishes')
    .join('recipes', 'dishes.id', '=', 'recipes.dish_id')
    .select('dish.id', 'dishes.name', { recipe: 'recipes.name' })
    .where({ 'dishes.id': id });
};

async function addDish(dish) {
  return db('dishes')
    .insert(dish)
    .then(([id]) => { return getDish(id) });
};

function update(id, changes) {
  return null;
};

function remove(id) {
  return null
};