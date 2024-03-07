import Products from '../models/Productos.js';
import products_inventory from '../models/products_inventory.js';
// Controlador para manejar las operaciones CRUD de productos

// Obtener todos los productos
async function getProducts(req, res) {
    try {
        const products = await Products.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Crear un nuevo producto
async function createProduct(req, res) {
    if (!req.body) {
        console.log(req.body)
        return res.status(400).json({ message: 'No se proporcionaron datos en el cuerpo de la solicitud.' });
    }
    try {
        const { product_name, description, category, location } = req.body;
        const newProduct = await Products.create({ product_name, description, category, location });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//async function createProduct(req, res) {
//    try {
//        const newProduct = await Productos.create({ Nombre: 'Producto de ejemplo', Categoria: 'Categoría de ejemplo' });
//        res.status(201).json(newProduct);
//    } catch (error) {
//        res.status(400).json({ message: error.message });
//    }
//}

// Actualizar un producto existente
async function updateProduct(req, res) {
    const { id_product } = req.params;
    try {
        await Products.update(req.body, {
            where: { id_product }
        });
        res.status(200).json({ message: 'Producto actualizado correctamente.' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Eliminar un producto
async function deleteProduct(req, res) {
    const { id_product } = req.params;
    try {
        await Products.destroy({
            where: { id_product }
        });
        res.status(200).json({ message: 'Producto eliminado correctamente.' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}



async function createProductInv(req, res) {
    if (!req.body) {
        console.log(req.body)
        return res.status(400).json({ message: 'No se proporcionaron datos en el cuerpo de la solicitud.' });
    }
    try {
        const { product_name, description, category, location } = req.body;
        const newProduct = await Products.create({ product_name, description, category, location });
        const PKprod = newProduct.id_product;
        console.log(newProduct)

        const inv = 1
        const formData2 = req.body;
        formData2.id_product = PKprod;
        formData2.id_inventory = inv

        const quant = await products_inventory.create(formData2)

        console.log(quant)



        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


async function deleteProductInv (req, res){
    const { id_products_inventory } = req.params;
    try {
        await products_inventory.destroy({
            where: { id_products_inventory  }
        });
        res.status(200).json({ message: 'Producto eliminado correctamente.' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}



export { getProducts, createProduct, updateProduct, deleteProduct , createProductInv,deleteProductInv};

