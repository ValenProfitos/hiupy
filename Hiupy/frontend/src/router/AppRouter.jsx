import { createBrowserRouter } from "react-router-dom";
import { Home, LoadingPage, ErrorPage, Login, Register, RecipesCard, Frescos, Congelados, Secos, Huerta, CategoriesMain, AddProduct, ListShop} from "../pages";
import { RecipesContainer } from "../pages/Recetas";
import { FullInventory } from "../pages/Categories/FullInventory";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoadingPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/Login",
        element: <Login />,
    },
    {
        path: "/Register",
        element: <Register/>,
    },
    {
        path: "/Home",
        element: <Home/>,
    },
    //Inventario / Categorías
    {
        path: "/All",
        element: <FullInventory/>, 
    },
    {
        path: "/Categories",
        element: <CategoriesMain/>, 
    },
    {
        path: "/Congelados",
        element: <Congelados/>,
    },
    {
        path: "/Frescos",
        element: <Frescos/>,
    },
    {
        path: "/Secos",
        element: <Secos/>, 
    },
    {
        path: "/Huerta",
        element: <Huerta/>, 
    },
    //Agregar productos
    {
        path: "/Add",
        element: <AddProduct/>, 
    },


    //Recetas
    {
        path: "/Recipes",
        element: <RecipesContainer/>,
    },
    {
        path: "/RecipeCard/:id_recipe",
        element: <RecipesCard/>,
    },
    {
        path: "/ListShop",
        element: <ListShop/>,
    }
]);