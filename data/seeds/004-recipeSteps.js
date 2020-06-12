
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_steps').insert([
        {
          recipe_id: 1,
          recipe_step: 1,
          instructions: 'On one slice of bread, spread peanut butter'
        },
        {
          recipe_id: 1,
          recipe_step: 2,
          instructions: 'On the other slice of bread, spread jelly'
        },
        {
          recipe_id: 1,
          recipe_step: 3,
          instructions: 'Smash bread slices together with the peanut butter and jelly facing each other'
        },
        {
          recipe_id: 2,
          recipe_step: 1,
          instructions: 'Boil 6 cups of water'
        },
        {
          recipe_id: 2,
          recipe_step: 2,
          instructions: 'Add Noodles to boiling water, and leave for 10 minutes'
        },
        {
          recipe_id: 2,
          recipe_step: 3,
          instructions: 'After boiling, strain noodles from water'
        },
        {
          recipe_id: 2,
          recipe_step: 4,
          instructions: 'Place noodles in bowl, and add butter and salt. Mix together until butter is completely melted'
        },
        {
          recipe_id: 3,
          recipe_step: 1,
          instructions: 'Peel bananas, and cut into quarters'
        },
        {
          recipe_id: 3,
          recipe_step: 2,
          instructions: 'Cut the leaves off the strawberries'
        },
        {
          recipe_id: 3,
          recipe_step: 3,
          instructions: 'Put all ingredients into blender, and blend for 3 to 5 minutes'
        },
        {
          recipe_id: 3,
          recipe_step: 4,
          instructions: 'Pour blended mixture into a nice glass, and enjoy!'
        },
      ]);
    });
};
