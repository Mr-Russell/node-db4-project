
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'PB and J'},
        {name: 'Butter Noodles'},
        {name: 'Strawberry Banana Smoothie'},
      ]);
    });
};
