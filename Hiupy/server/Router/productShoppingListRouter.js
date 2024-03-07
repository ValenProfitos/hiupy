// '../Router/productShoppingListRouter.js'

//import express from 'express';
//import { getAllProductShoppingList, createProductShoppingList, updateProductShoppingList, deleteProductShoppingList } from '../controller/productShoppingList.js';

const productShoppingListRouter = express.Router();

productShoppingListRouter.get('/products_shopping_lists', getAllProductShoppingList);
productShoppingListRouter.post('/products_shopping_lists', createProductShoppingList);
productShoppingListRouter.put('/products_shopping_lists/:id', updateProductShoppingList);
productShoppingListRouter.delete('/products_shopping_lists/:id', deleteProductShoppingList);

//export default productShoppingListRouter;