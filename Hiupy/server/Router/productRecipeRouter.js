// '../Router/productRecipeRouter.js'

import express from 'express';
import { getAllProductRecipe, createPRoductRecipe, updateProductRecipe, deleteProductRecipe } from '../controller/productRecipeController.js'

const prodRecipeRouter = express.Router();

prodRecipeRouter.get('/products_recipes', getAllProductRecipe);
prodRecipeRouter.post('/products_recipes', createPRoductRecipe);
prodRecipeRouter.put('/products_recipes/:id', updateProductRecipe);
prodRecipeRouter.delete('/products_recipes/:id', deleteProductRecipe);

export default prodRecipeRouter;