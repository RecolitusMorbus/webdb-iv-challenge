exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          name: "Grannys Tacos",
          directions: "blah",
          dish_id: 1
        },
        {
          name: "TexMex Tacos",
          directions: "tacostuff",
          dish_id: 1
        },
        {
          name: "My Tacos",
          dish_id: 1
        }
      ]);
    });
};