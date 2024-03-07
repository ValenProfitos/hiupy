/* eslint-disable react/prop-types */
import ProductsContext from "./ProductsContext";
import useApiData from "../../Hooks/useApiData";

const ProductsContextProvider = ({ children }) => {
    //Fetch para productos del inventario
    const [data, loading, error] = useApiData(
        "http://localhost:3000/api/inventory/1"
    );
    console.log("Console log : ", data);
    // "/src/data/productos.json"

    //Método que se encarga de filtrar los productos del congelador
    const getProductosCongelador = () => {
        const freezer = data.filter(
            (producto) => producto.location === "freezer"
        );
        console.log("Acá se ejecutó getProductosCongelador");
        return freezer;
    };

    //Método que se encarga de filtrar los productos de heladera
    const getProductosFrescos = () => {
        const frescos = data.filter(
            (producto) => producto.location === "heladera"
        );
        console.log("Acá se ejecutó getProductosFrescos");
        return frescos;
    };

    //Método que se encarga de filtrar los productos de secos
    const getProductosSecos = () => {
        const alacena = data.filter(
            (producto) => producto.location === "alacena"
        );
        console.log("Acá se ejecutó getProductosSecos");
        return alacena;
    };

    //Método que se encarga de filtrar los productos de huerta
    const getProductosHuerta = () => {
        const huerta = data.filter(
            (producto) => producto.location === "huerta"
        );
        console.log("Acá se ejecutó getProductosHuerta");
        return huerta;
    };

    const values = {
        data,
        loading,
        error,
        getProductosFrescos,
        getProductosCongelador,
        getProductosSecos,
        getProductosHuerta,
    };

    return (
        <ProductsContext.Provider value={values}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;
