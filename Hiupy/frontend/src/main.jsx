import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/AppRouter.jsx";
import RecipeContextProvider from "./context/Recipes/RecipeContextProvider.jsx";
import ProductsContextProvider from "./context/Products/ProductsContextProvider.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ProductsContextProvider>
            <RecipeContextProvider>
                <RouterProvider router={router}>
                    
                        <App />
                    
                </RouterProvider>
            </RecipeContextProvider>
        </ProductsContextProvider>
    </React.StrictMode>
);
