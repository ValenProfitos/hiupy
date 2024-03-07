// '../models/productsRecipes.js'

import sequelize from "../sequelize.js";
import { DataTypes } from "sequelize";

const ProductRecipes = sequelize.define('products_recipes', {
    id_products_recipes: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_product: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'products', //Nombre de la tabla en referencia
            key: 'id_product' // Clave primaria de la tabla
        }
    },
    id_recipe: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'recipes',
            key: 'id_recipe'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    unit_measure: {
        type: DataTypes.ENUM,
        values: [
            "gramos",
            "unidades",
            "mililitros"
        ]
    }
});

export default ProductRecipes;