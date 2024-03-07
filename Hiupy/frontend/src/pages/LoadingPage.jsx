import { Boton } from "../components";

export const LoadingPage = () => {
    return (
        <>
            <div
                className="bg-[url('/assets/images/fondoalimentos-1.png')] bg-cover 
                bg-center min-h-screen flex flex-col items-center gap-y-9 justify-center"
            >
                <img
                    src="/assets/images/logo-blanco.png"
                    alt="Logo"
                    className=" w-32"
                />

                <div className="flex flex-col gap-y-4 w-3/5">
                    <h1
                        className="text-center font-semibold text-4xl
                        text-white font-poppins"
                    >
                        Nuestro Alimento
                    </h1>
                    <p
                        className="text-center text-sm
                        text-white font-poppins"
                    >
                        La forma de conectarnos con todo lo que nos rodea
                    </p>
                    <Boton etiqueta="Acceder" fondo="#E2A748" ruta="/Login" />{" "}
                    {/* Boton de prueba */}
                </div>
            </div>
        </>
    );
};
