import sequelize from '../sequelize.js';
import {DataTypes} from 'sequelize'
//const Sequelize = new sequelize();

const products_inventory = sequelize.define('products_inventories', {

    id_products_inventory:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    
    id_inventory:{
        type: DataTypes.INTEGER,
    }, 
    
    id_product:{
        type: DataTypes.INTEGER

    } ,
    
    id_user:{
        type: DataTypes.INTEGER
    },
     quantity:{
        type:DataTypes.INTEGER
     },
      unit_measure: {
        type: DataTypes.ENUM,
        values: ['gramos', 'mililitros', 'unidades']
        
      }
    }
);



export default products_inventory;