// '../models/productShoppingList.js'

import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const ProductShoppingList = sequelize.define("products_shopping_lists", {
  id_prod_shop_list: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_product: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "products",
      key: "id_product",
    },
  },
  id_list: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "shopping_list",
      key: "id_list",
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  unit_measure: {
    type: DataTypes.ENUM,
    values: ['gramos', 'unidades', 'mililitros'],
  }
});

export default ProductShoppingList;