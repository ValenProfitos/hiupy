import express from 'express';
import { getAllRecipes, createRecipe, updateRecipe, deleteRecipe, getRecipe } from '../controller/recipeController.js';

const recipeRouter = express.Router();

recipeRouter.get('/recipes/', getAllRecipes);
recipeRouter.get('/recipes/:id', getRecipe)
recipeRouter.post('/recipes/post', createRecipe);
recipeRouter.put('/recipes/update/:id', updateRecipe);
recipeRouter.delete('/recipes/delete/:id', deleteRecipe);

export default recipeRouter;