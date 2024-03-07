import { useContext } from "react";
import { NavBar, Footer } from "../../components";
import ProductContext from "../../context/Products/ProductsContext";
import { NavLink, useParams } from "react-router-dom";
import RecipeContext from "../../context/Recipes/RecipesContext";

export const RecipesCard = () => {
    const { id_recipe } = useParams();

    const { data: productsData, loading: productsLoading, error: productsError } = useContext(ProductContext);
    const { data: recipesData } = useContext(RecipeContext);
    
    const selectedRecipe = recipesData.find(recipe => recipe.id_recipe === parseInt(id_recipe));

    return (
        <>
            <NavBar />
            <div className="w-full box-border">
                <div className="flex flex-col px-6 align-middle gap-y-3">
                    <h2 className="font-semibold text-base py-2">
                        A continuación, productos a utilizar en la receta:
                    </h2>
                    {selectedRecipe && (
                        <>
                            <img
                                src={selectedRecipe.img_url}
                                alt={selectedRecipe.recipe_name}
                                className="max-w-96 object-contain"
                            />
                            <figcaption className="flex justify-between max-w-96">
                                <h2 className="font-semibold text-1xs w-2/3">
                                    {selectedRecipe.recipe_name}
                                </h2>
                                <p className="text-mini">Por Gladys Olazar</p>
                            </figcaption>
                            <ul className="text-xs space-y-3 max-w-96">
                                <h2 className="font-semibold text-base underline">
                                    Preparación
                                </h2>
                                <legend>{selectedRecipe.instruction}</legend>
                                <h3 className="font-semibold text-base underline">Ingredientes</h3>
                                {!productsLoading && !productsError ? (
                                    productsData.map((item) => (
                                        <li className="flex justify-between" key={item.id_product}>
                                            <label>{item.product_name}</label>
                                            <input
                                                type="checkbox"
                                                className="checked:bg-green-400 rounded-xl"
                                                checked={item.quantity >= 2 ? true : false}
                                                disabled
                                            />
                                        </li>
                                    ))
                                ) : (
                                    productsError && (
                                        <>
                                            <h2>Lo sentimos, parece que ha ocurrido un error</h2>
                                        </>
                                    )
                                )}
                            </ul>
                            <NavLink to="/ListShop" className="self-center mt-8">
                                <button className="bg-e2a748 px-7 py-4 rounded-lg text-white">
                                    Lista de compras
                                </button>
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

