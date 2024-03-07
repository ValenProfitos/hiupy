// '../controller/productShoppingList.js'

import Products from "../models/Productos.js";
import ProductShoppingList from "../models/productShoppingList.js";
import ShoppingList from "../models/shoppingList.js";

// Obtener todos los productos en la lista de compras
export async function getProductShoppingList(req, res){

    const {id} = req.params

    try {
        const productsShoppingList = await ProductShoppingList.findAll({
            where: { id_list : id}
            
        });
        const productData = productsShoppingList.map(product => ({ 
            id_products: product.id_product,
            quantity: product.quantity,
            id_product_inventory: product.id_products_shop_list}))
      console.log(productData)

    const prodShop = await products.findAll({
        where: {id_product: productData.map(product => product.id_products)},
        
      
    })


    const response = prodShop.map((product, index) => ({
        ...product.toJSON(),
        quantity: productData[index].quantity // 
    }));


    res.json(response);
} catch (error) {
    console.error('Error al obtener los productos:', error);
    res.status(500).json({ message: 'Error al obtener los productos' });
}
}


   //     res.json( prodInv);
   //     console.log(prodInv)
   // } catch (error) {
   //     console.error('Error al obtener los productos:', error);
   //     res.status(500).json({ message: error.message });
   // }
   // }



   async function createProductShop(req, res) {
    if (!req.body) {
        console.log(req.body)
        return res.status(400).json({ message: 'No se proporcionaron datos en el cuerpo de la solicitud.' });
    }
    try {
        const { product_name, description, category, location } = req.body;
        const newProduct = await Products.create({ product_name, description, category, location });
        const PKprod = newProduct.id_product;
        console.log(newProduct)

        const shop = 1
        const formData2 = req.body;
        formData2.id_product = PKprod;
        formData2.id_inventory = shop

        const quant = await productsShoppingList.create(formData2)

        console.log(quant)



        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}