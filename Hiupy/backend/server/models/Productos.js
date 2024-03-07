import sequelize from '../sequelize.js';
import {DataTypes} from 'sequelize'
;

const Products = sequelize.define('products', {
  // Modelo
    id_product: {
          type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    product_name:{
          type: DataTypes.STRING
    },

    description: {
          type: DataTypes.STRING
    },
    category: {
          type: DataTypes.ENUM,
          values: ['frutas y verduras','otros','despensa','semillas y frutos secos','condimentos','carnes','lacteos y huevos','pasta y arroz','legumbres','conservas','panaderia y pasteleria']
    },
    location: {
          type: DataTypes.ENUM,
          values: ['alacena', 'huerta', 'heladera', 'freezer']
    }
}, )

// logeo del modelo
//console.log(User === sequelize.models.User);

export default Products;