//inventory(id_inventory, id_user, inventory_name)



import sequelize from '../sequelize.js';
import {DataTypes} from 'sequelize'
//const Sequelize = new sequelize();

const inventory = sequelize.define('inventories', {
        id_inventory: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },


        id_user:{
            type: DataTypes.INTEGER
        },

        inventory_name:{
            type: DataTypes.STRING
        }


    
    
    
    
});

export default inventory;