const db = require('../data/db-connection.js');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

function getRecipes(){
  return db("recipes")
    .select("*")

}

function getShoppingList(recipe_id){
  return db("recipe_ingredients AS ri")
    .where({"ri.recipe_id": recipe_id})
    .join("ingredients AS i", "i.id", "ri.ingredient_id")
    .select("i.name", "ri.quantity", "ri.quantity_type")
}

function getInstructions(recipe_id){
  return db("recipe_steps AS rs")
    .where({"rs.recipe_id": recipe_id})
    .select("rs.recipe_step", "rs.instructions")
    .orderBy("rs.recipe_step")
}