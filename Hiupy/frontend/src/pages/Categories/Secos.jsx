import { useContext } from "react";
import { Footer, NavBar, Product, AddProdButton } from "../../components";
import ProductsContext from "../../context/Products/ProductsContext";

export const Secos = () => {
    const { loading, error, getProductosSecos } = useContext(ProductsContext);
    const productosSecos = getProductosSecos();
    // console.log(productosSecos);
    return (
        <div>
            <NavBar />
            <h2 className="text-md mt-4 text-center font-semibold">
                Alimentos Secos
            </h2>
            <div className="flex flex-col min-h-screen gap-6 my-9 w-11/12 mx-auto">
                {" "}
                {!loading & !error
                    ? productosSecos.map((producto) => (
                          <Product
                              key={producto.id_product}
                              product={producto}
                          />
                      ))
                    : error && (
                          <>
                              <h2>
                                  Lo sentimos, parece que ha ocurrido un error
                              </h2>
                          </>
                      )}
            </div>
            <div className="relative">
                <AddProdButton />
            </div>

            <Footer />
        </div>
    );
};
