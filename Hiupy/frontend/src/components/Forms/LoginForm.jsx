import { NavLink } from "react-router-dom";

export const LoginForm = () => {
    return (
        <>
            <section>
                <form className="flex flex-col gap-1 my-12  ">
                    <legend className="text-sm">Correo Electrónico</legend>
                    <input
                        type="email"
                        placeholder="Ingresá tu correo electrónico"
                        value="akiedis@redhot.com"
                        className="
                    border-2 
                    border-light-grey 
                    rounded-lg
                    p-2
                    w-full
                    placeholder:text-xs
                    mb-6"
                    ></input>

                    <legend className="text-sm">Contraseña</legend>
                    <input
                        type="password"
                        placeholder="Ingresá tu correo electrónico"
                        value="somerandom"
                        className="
                    border-2 
                    border-light-grey 
                    rounded-lg
                    p-2
                    w-full
                    placeholder:text-xs
                    mb-6"
                    ></input>

                    <legend
                        className="
                    text-xs
                    text-amarillo-custom
                    mb-6"
                    >
                        ¿Olvidaste la contraseña?
                    </legend>
                    <NavLink to="/home">
                        <button
                            className="
                    w-full
                    p-2
                    border-none
                    rounded-lg
                    bg-botones
                    text-white
                    font-semibold"
                        >
                            Ingresá
                        </button>
                    </NavLink>
                </form>
            </section>
            {/* Logeo alternativo */}
            <section>
                <div className="flex items-center gap-2">
                    <hr className="flex-grow" />
                    <span className="text-xs text-dark-grey">
                        O ingresa con tu cuenta de:{" "}
                    </span>
                    <hr className="flex-grow" />
                </div>
                <div className="flex flex-row justify-evenly items-center my-4">
                    <img
                        src="/assets/google.png"
                        className="rounded-lg shadow-black shadow-2xl	"
                    ></img>

                    <img
                        src="/assets/facebook.png"
                        className="rounded-lg shadow-black shadow-2xl	"
                    ></img>
                </div>
                <div className="flex justify-center">
                    <p className="text-xs font-semibold text-black">
                        ¿Todavía no tenés cuenta?
                        <span className="text-xs text-amarillo-custom">
                            <NavLink to="/Register">Registrate</NavLink>
                        </span>
                    </p>
                </div>
            </section>
        </>
    );
};
