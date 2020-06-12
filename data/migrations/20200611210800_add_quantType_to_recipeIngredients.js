
exports.up = function(knex) {
  return knex.schema.table('recipe_ingredients', tbl => {
    tbl.string('quantity_type', 100)
  })
};

exports.down = function(knex) {
  return knex.schema.table('recipe_ingredients', tbl => {
    tbl.dropColumn('quantity_type')
  })
};