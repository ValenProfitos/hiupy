// '../controller/productShoppingListController.js'

import Products from "../models/Productos.js";
import ProductRecipes from "../models/productsRecipes.js"
import Recipe from "../models/recipes.js";

// Obtener todos los productos en la receta
export async function getAllProductRecipe(req, res) {
    try {
        const productRecipe = await ProductRecipes.findAll();
        res.json(productRecipe);
    } catch (error) {
        console.error('Error al obtener los productos en la receta:', error);
        res.status(500).json({ message: error.message });
    }
}

// Crear nuevo producto en receta
export async function createPRoductRecipe(req, res) {
    try {
        const { id_recipe, id_product, quantity, unit_measure } = req.body;
        const recipe = await Recipe.findByPk(id_recipe);
        const product = await Products.findByPk(id_product);
        
        if (!recipe) {
            return res.status(404).json({ message: 'Receta no encontrada' });
        }
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' })
        }
        const newProductRecipe = await ProductRecipes.create({ id_recipe, id_product, quantity, unit_measure });
        res.status(201).json(newProductRecipe);
    } catch (error) {
        res.status(400).json({ mesage: error.message });
    }
}

// Actualizar un producto en receta
export async function updateProductRecipe(req, res) {
    const { id } = req.params;
    try {
        await ProductRecipes.update(req.body, { where: { id } });
        res.status(200).json({ message: 'Producto en receta actualizado' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Eliminar un producto en receta
export async function deleteProductRecipe(req, res) {
    const { id } = req.params;
    try {
        await ProductRecipes.destroy({ where: { id } });
        res.status(200).json({ message: 'Producto en receta eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}