import express from "express";
import { getProductInventory } from "../controller/productInventoryController.js";
const inventoryRouter = express.Router()


inventoryRouter.get('/inventory/:id', getProductInventory)

export default inventoryRouter