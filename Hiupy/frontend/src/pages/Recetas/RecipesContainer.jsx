import { Footer, NavBar, SearchBar } from "../../components";
import { RecipesList } from "./RecipeList";
// import useApiData from "../../Hooks/useApiData";
import { useContext } from "react";
import RecipeContext from "../../context/Recipes/RecipesContext";
import { Link } from "react-router-dom";

export const RecipesContainer = () => {
    //Custom hook que se encarga de manejar el fetch de datos.
    // const [data, loading, error] = useApiData("/src/data/recetas.json");
    // console.log("Console log: ", data);
    const { data, loading, error } = useContext(RecipeContext);
    // console.log(data);

    return (
        <>
            <NavBar />

            <div className="flex flex-col gap-4 p-6">
                <h2 className="text-justify text-[16px] font-semibold">
                    Estas son las recetas sugeridas con los ingredientes que
                    tenés en casa
                </h2>
                <SearchBar placeholder={"Busca mas recetas"} />
            </div>
            <div className="grid grid-cols-2 gap-2 p-4">
                {!loading && !error
                    ? data.map((item) => (
                        <Link key={item.id_recipe} to={`/RecipeCard/${item.id_recipe}`}>
                          <RecipesList receta={item} />
                          </Link>
                      ))
                    : error && (
                          <>
                              <h2>
                                  Lo sentimos, parece que ha ocurrido un error
                              </h2>
                          </>
                      )}
            </div>
            <Footer />
        </>
    );
};
