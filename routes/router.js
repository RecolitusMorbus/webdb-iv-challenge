const express = requires('express');

const Recipes = require('./data/recipe-model');
const Dishes = require('./data/dish-model');

const router = express.Router();

/* get() all recipes :: /api/routes/recipes/ */
router.get();

/* get() all dishes :: /api/routes/dishes/ */
router.get('/recipes/', async (req, res) => {
  try {
    const recipes = await Recipes
  }
});

/* get() dishes by id :: /api/routes/dishes/:id */
router.get();

/* post() dishes :: /api/routes/dishes/ */
router.post();

/* put() dishes by id :: /api/routes/dishes/:id */
router.put();

/* delete() dishes by id :: /api/routes/dishes/:id */
router.delete();

module.exports = router;