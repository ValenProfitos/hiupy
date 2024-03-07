// '../models/recipes.js'

import sequelize from "../sequelize.js";
import { DataTypes } from "sequelize"; 

const Recipe = sequelize.define("recipes", {
    id_recipe: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    recipe_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    instruction: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cook_time: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    difficulty: {
        type: DataTypes.ENUM('facil', 'media', 'dificil'),
        allowNull: false
    },
    img_url: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

export default Recipe;