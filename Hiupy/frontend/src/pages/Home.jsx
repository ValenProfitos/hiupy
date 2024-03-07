// import { Carousel } from "flowbite-react";
import { Boton, Footer, SearchBar, NavBar } from "../components";

export const Home = () => {
    // const profileStyle = "contain"; //para mantener aspecto del perfil

    return (
        <>
            <NavBar/>
                <div className="absolute text-left mx-6 pt-4">
                    <h2 className="font-semibold text-xl">
                        Buenas noches usuario
                    </h2>
                    <span className="text-dark-grey text-xs">
                        ¿Cómo vamos a alimentarnos?
                    </span>
                </div>
                <div className="flex flex-col gap-8 pb-6 w-11/12 mx-auto h-screen justify-center ">
                        <Boton
                            texto="Preparar o planificar nuestra comida"
                            etiqueta="Cocinar"
                            fondo="#C7786C"
                            ruta="/Recipes"
                        />

                        <Boton
                            texto="Revisar qué alimentos disponemos"
                            etiqueta="Inventario"
                            fondo="#CBCEB9"
                            ruta="/Categories"
                        />

                        <Boton
                            texto="Conseguir los ingredientes que faltan"
                            etiqueta="Lista de compras"
                            fondo="#E2A748"
                            ruta="/ListShop"
                        />
                    </div>

                {/* <SearchBar placeholder={"Buscar ingredientes"} /> */}

                {/* {/* <div className="w-3/4 h-full mx-auto">
                        <Carousel
                            onSlideChange={(index) =>
                                console.log("onSlideChange()", index)
                            }
                        >
                            <div className="flex flex-col items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <img src="/public/assets/images/food-example.png" />{" "}
                                Slide 1
                            </div>
                            <div className="flex flex-col items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <img src="/public/assets/images/food-example.png" />{" "}
                                Slide 2
                            </div>
                            <div className="flex flex-col items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <img src="/public/assets/images/food-example.png" />{" "}
                                Slide 3
                            </div>
                        </Carousel> 
                    </div> */}
            <Footer />
        </>
    );
};
