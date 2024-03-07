import { NavBar, AddProdButton, Footer, Product } from "../../components";
import ProductsContext from "../../context/Products/ProductsContext";
import { useContext } from "react";

export const FullInventory = () => {
    const { data, loading, error } = useContext(ProductsContext);
    
    return (
        <div>
            <NavBar />
            <h2 className="text-md mt-4 text-center font-semibold">
                Todos tus alimentos
            </h2>
            <div className="flex flex-col min-h-screen gap-6 my-9 w-11/12 mx-auto">
                {!loading & !error
                    ? data.map((producto) => (
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
