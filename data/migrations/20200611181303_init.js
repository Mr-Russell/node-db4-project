
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
    tbl.increments();
    tbl.string('name', 120)
      .notNullable();
  })
  .createTable('ingredients', tbl => {
    tbl.increments();
    tbl.string('name', 100)
      .notNullable();
  })
  .createTable('recipe_ingredients', tbl => {
    tbl.increments();
    tbl.integer('recipe_id')
      .unsigned()
      .references('recipes.id')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
    tbl.integer('ingredient_id')
      .unsigned()
      .references('ingredients.id')
      .onDelete('RESTRICT')
      .onUpdate("CASCADE")
    tbl.float('quantity')
      .notNullable()
  })
  .createTable('recipe_steps', tbl => {
    tbl.increments();
    tbl.integer('recipe_id')
      .unsigned()
      .references('recipes.id')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
    tbl.integer('recipe_step')
      .notNullable()
    tbl.string('instructions')
      .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_steps')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
    
};
