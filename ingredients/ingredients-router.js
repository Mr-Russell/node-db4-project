const router = require('express').Router();

const db = require('../data/db-connection.js')


router.get('/:id/recipes', (req, res)=>{
  db("recipe_ingredients AS ri")
    .where({"ri.ingredient_id": req.params.id})
    .join("recipes AS r", "r.id", "ri.recipe_id")
    .select("r.name")
    .then(recipes => res.status(200).json(recipes))
    .catch(err => {
      console.log(err)
      res.status(500).json(`An Error occurred when retrieving all recipes with Ingredient ID ${req.params.id}`)
    })
})

module.exports = router