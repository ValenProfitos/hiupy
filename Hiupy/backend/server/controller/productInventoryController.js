import products_inventory from '../models/products_inventory.js'
//import inventory from '../models/inventory'
import products from '../models/Productos.js'


export async function getProductInventory(req, res){

    const {id} = req.params

    try {
        const productsInventory = await products_inventory.findAll({
            where: { id_inventory: id}
            
        });
        const productData = productsInventory.map(product => ({ 
            id_products: product.id_product,
            quantity: product.quantity,
            id_product_inventory: product.id_products_inventory}))
      console.log(productData)

    const prodInv = await products.findAll({
        where: {id_product: productData.map(product => product.id_products)},
        
      
    })


    const response = prodInv.map((product, index) => ({
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




