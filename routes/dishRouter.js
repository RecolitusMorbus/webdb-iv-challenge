const express = require('express');
const Dishes = require('../data/dish-model.js');

const dishRouter = express.Router();

/* get() all dishes */
dishRouter.get('/', async (req, res) => {
  try {
    const dishes = await Dishes.getDishes(req.query);
    res.status(200).json(dishes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `An error occurred: ${err}` });
  };
});

/* get() dish by id */
dishRouter.get('/:id', async (req, res) => {
  try {
    const dish = await Dishes.getDish(req.param.id);
    if (dish) {
      res.status(200).json(dish);
    } else {
      res.status(404).json({ message: `There is no dish by this id.` })
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `An error occurred: ${err}` });
  };
});

/* post() new dish */
dishRouter.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    const newDish = await Dishes.addDish(req.body);
    if (!name) {
      res.status(400).json({ message: `Please give the dish a name.` });
    } else {
      res.status(202).json(newDish);
    };
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `An error occurred: ${err}` });
  };
});

/* put() dish by id */
dishRouter.put('/:id', async (req, res) => {
  const { id } = req.param;
  const { name } = req.body;
  try {
    const dish = await Dishes.getDishes(id);
    if (dish) {
      await Dishes.update(id, name);
      res.status(200).json(dish);
    } else {
      res.status(404).json({ message: `No dish by that ID was found.` });
    };
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `An error occurred: ${err}` });
  };
});

/* delete() dish by id */
dishRouter.delete('/:id', async (req, res) => {
  try {
    const dish = await Dishes.remove(req.param.id);
    if (dish) {
      res.status(200).json(dish, { message: `The dish was successfully deleted.` });
    } else {
      res.status(404).json({ message: `No dish by that ID was found.` });
    };
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `An error occurred: ${err}` });
  };
});

module.exports = dishRouter;