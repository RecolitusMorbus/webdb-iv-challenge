exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('dishes', tbl => {
      tbl.increments();
      tbl
        .string('name', 255)
        .notNullable()
        .unique();
    })
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl
        .string('name', 255)
        .notNullable()
        .unique();
      tbl
        .string('directions', 5000)
        .unique();
      tbl
        .integer('dish_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl
        .string('ingredient', 225)
        .notNullable()
        .unique();
    })
    .createTable('recipe_ingredients', tbl => {
      tbl.increments();
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    });
};

/* To use the tbl function above, you must order your exports.down in reverse. */
exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('inregdients')
    .dropTableIfExists('recipes')
    .dropTableIfExists('dishes');
};
