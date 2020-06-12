
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Bread'},
        {name: 'Peanut Butter'},
        {name: 'Jelly'},
        {name: 'Noodles'},
        {name: 'Butter'},
        {name: 'Salt'},
        {name: 'Strawberries'},
        {name: 'Bananas'},
        {name: 'Milk'},
      ]);
    });
};
