// '../controller/shoppingListController.js'

import ShoppingList from "../models/shoppingList.js";
import User from "../models/users.js";

// Obtener todas las listas de compras
export async function getAllShoppingList(req, res) {
    try {
        const shoppingList = await ShoppingList.findAll();
        res.json(shoppingList);
    } catch (error) {
        res.status(500).json({ message: error.mesagge });
    }
}

// Crear una nueva lista de compra
export async function createShoppingList(req, res) {
    try {
        const { id_user, list_name } = req.body;
        // Verificar si existe el usuario
        const user = await User.findByPk(id_user);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        const newShoppingList = await ShoppingList.create({ id_user, list_name });
        res.status(201).json(newShoppingList);
    } catch (error) {
        res.status(400).json({ message: error.message })
            ;    }
}

// Actualizar una lista de compras existente
export async function updateShoppingList(req, res) {
    const { id } = req.params;
    try {
        const { id_user, list_name } = req.body;
        //Verificar si existe el usuario
        const user = await User.findByPk(id_user);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        await ShoppingList.update({ id_user, list_name }, { where: { id } });
        res.status(200).json({ message: 'Lista de compras actualizada correctamente' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Eliminar una lista de compras existente
export async function deleteShoppingList(req, res) {
    const { id } = req.params;
    try {
        await ShoppingList.destroy({ where: { id } });
        res.status(200).json({ message: 'Lista de compras eliminada correctamente' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}