// '../models/shoppinList.js'

import sequelize from "../sequelize.js";
import { DataTypes } from "sequelize";

const ShoppingList = sequelize.define("shopping_list", {
    id_list: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    list_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "users",
            key: "id_user"
        }
    }
});

export default ShoppingList;