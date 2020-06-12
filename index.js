const express = require("express");

const server = express();

server.use(express.json());

const recipesRouter = require('./recipes/recipes-router.js')
server.use('/api/recipes', recipesRouter)

const ingredientsRouter = require('./ingredients/ingredients-router.js')
server.use('/api/ingredients', ingredientsRouter)

const port = process.env.PORT || 5555;

server.listen(port, ()=> console.log(`\n *** Server Running on Port ${port} *** \n`));