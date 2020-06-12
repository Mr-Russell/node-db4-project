const router = require('express').Router();

const RecipesDB = require("./recipes-model.js")

router.get("/", (req, res)=>{
  RecipesDB.getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => {
      console.log(err)
      res.status(500).json("An Error occurred when trying to retrieve Recipes")
    })
})

router.get("/:id/shoppingList", (req, res)=>{
  RecipesDB.getShoppingList(req.params.id)
    .then(list => res.status(200).json(list))
    .catch(err => {
      console.log(err)
      res.status(500).json(`An Error occurred when retrieving a Shopping List for Recipe ID ${req.params.id}`)
    })
})

router.get("/:id/instructions", (req, res)=>{
  RecipesDB.getInstructions(req.params.id)
    .then(list => res.status(200).json(list))
    .catch(err => {
      console.log(err)
      res.status(500).json(`An Error occurred when retrieving Instructs for Recipe ID ${req.params.id}`)
    })
})

module.exports = router