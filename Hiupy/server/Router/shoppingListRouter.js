// '../Router/shoppingListRouter.js'

import express from 'express';
//import { createShoppingList, updateShoppingList, deleteShoppingList } from '../controller/shoppingListController.js';
import { getProductShoppingList } from '../controller/productShoppingList.js';
const shoppingListRouter = express.Router();

shoppingListRouter.get('/prodshop/:id', getProductShoppingList );
//shoppingListRouter.post('/shopping_list', createShoppingList);
//shoppingListRouter.put('/shopping_list/:id', updateShoppingList);
//shoppingListRouter.delete('/shopping_list/:id', deleteShoppingList);
//
export default shoppingListRouter;