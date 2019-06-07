const express = require('express');
const Recipes = require('../data/recipe-model.js');

const recipeRouter = express.Router();

/* get() all recipes */
recipeRouter.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes(req.query);
    res.status(200).json(recipes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `An error occurred: ${err}` });
  };
});

/* post() new recipe */
recipeRouter.post('/', async (req, res) => {
  const { name, directions } = req.body;
  try {
    const newRecipe = await Recipes.addRecipe(req.body);
    if (!name || !directions) {
      res.status(400).json({ message: `Please give the recipe a name and some directions.` });
    } else if (!name) {
      res.status(400).json({ message: `Please give the recipe a name.` })
    } else if (!directions) {
      res.status(400).json({ message: `Please give the recipe some directions.` })
    } else {
      res.status(202).json(newRecipe);
    };
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `An error occurred: ${err}` });
  };
});

/* put() recipe by id */
recipeRouter.put('/:id', async (req, res) => {
  const { id } = req.param;
  const { name, directions } = req.body;
  try {
    const recipe = await Recipes.getRecipes(id);
    if (recipe) {
      await Recipes.update(id, { name, directions });
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ message: `No recipe by that ID was found.` });
    };
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `An error occurred: ${err}` });
  };
});

/* delete() recipe by id */
recipeRouter.delete('/:id', async (req, res) => {
  try {
    const recipe = await Recipes.remove(req.param.id);
    if (recipe) {
      res.status(200).json(recipe, { message: `The recipe was successfully deleted.` });
    } else {
      res.status(404).json({ message: `No recipe by that ID was found.` });
    };
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `An error occurred: ${err}` });
  };
});

module.exports = recipeRouter;