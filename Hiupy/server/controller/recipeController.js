// '../controller/recipeController.js'

import Recipe from "../models/recipes.js";

// Obtener todas las recetas
export async function getAllRecipes(req, res) {
    try {
        const recipes = await Recipe.findAll();
        res.json(recipes);
    } catch (error) {
        console.error('Error al obtener recetas:', error);
        res.status(500).json({ message: 'Error al obtener recetas' });
    }
}

export async function getRecipe(req, res) {
    const {id} = req.params;

    try {
        const recipe = await Recipe.findByPk(id);
        res.json(recipe);
    } catch (error) {
        console.error('Error al obtener recetas:', error);
        res.status(500).json({ message: 'Error al obtener recetas' });
    }
}

// Crear nueva receta
export async function createRecipe(req, res) {
    const { recipe_name, description, instruction, cook_time, difficulty, img_url } = req.body;
    try {
        const newRecipe = await Recipe.create({ recipe_name, description, instruction, cook_time, difficulty, img_url });
        res.status(201).json(newRecipe);
    } catch (error) {
        console.error('Error al crear receta:', error);
        res.status(500).json({ message: 'Error al crear receta' });
    }
}

// Actualizar receta por id
export async function updateRecipe(req, res) {
    const { id } = req.params;
    const { recipe_name, description, instruction, cook_time, difficulty, img_url } = req.body;
    try {
        const recipe = await Recipe.findByPk(id);
        if (!recipe) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        await recipe.update({ recipe_name, description, instruction, cook_time, difficulty, img_url });
        res.json({ message: 'Receta actualizada correctamente' });
    } catch (error) {
        console.error('Error al actualizar la receta:', error);
        res.status(500).json({ message: 'Error al actualizar la receta' });
    }
}

// Eliminar un usuario ID
export async function deleteRecipe(req, res) {
    const { id } = req.params;
    try {
        const recipe = await Recipe.findByPk(id);
        if (!recipe) {
            return res.status(404).json({ message: 'Receta no encontrada' });
        }
        await recipe.destroy();
        res.json({ message: 'Receta eliminada correctamente' });
    } catch (error) {
        console.error('Error al eliminar receta:', error);
        res.status(500).json({ message: 'Error al eliminar receta' });
    }
}