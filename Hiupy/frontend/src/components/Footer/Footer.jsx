import { NavLink } from "react-router-dom"; 

export const Footer = () => {

    return (
        <div className="flex flex-col p-6 gap-y-10 mt-10 bg-slate-50"> 
            <ul>
                <li className="text-base mb-4 border-b-4 border-botones font-bold w-2/6 max-w-20">Explorar</li>
                <li><NavLink to="/Home" className=" text-xs">Inicio</NavLink></li>
                <li><NavLink to="/Recipes" className=" text-xs">Cocinar</NavLink></li>
                <li><NavLink to="/Categories" className=" text-xs">Inventario</NavLink></li>
                <li><NavLink to="/ListShop" className=" text-xs">Lista de compras</NavLink></li>

                {/* rutas temporales para pruebas de redireccion */}
                
            </ul>

            <ul>
                <li className="text-base mb-4 border-b-4 border-botones font-bold w-2/6 max-w-20">Contacto</li>
                <li><a href="#" className=" text-xs">+54 11 30962378</a></li>
                <li><a href="#" className=" text-xs">Bs As, Argentina</a></li>
                <li><a href="#" className=" text-xs">Hiupy@gmail.com</a></li>
            </ul>

            <div className="flex flex-col gap-y-3">
                <h2 className="text-base mb-2 border-b-4 border-botones font-bold w-2/6 max-w-20">Siguenos</h2> 
                    <ul className="flex justify-between w-4/5 max-w-64">
                        <li><a href="#"><img src="/assets/images/vector/facebook.svg" alt="facebook" /></a></li>
                        <li><a href="#"><img src="/assets/images/vector/twitter.svg" alt="twitter" /></a></li>
                        <li><a href="#"><img src="/assets/images/vector/instagram.svg" alt="instagram" /></a></li>
                        <li><a href="#"><img src="/assets/images/vector/youtube.svg" alt="youtube" /></a></li>
                        <li><a href="#"><img src="/assets/images/vector/tiktok.svg" alt="tiktok" /></a></li>
                    </ul>
                <img src="/assets/images/hiupy-watermark.svg" alt="Hiupy-logo" className=" w-2/4 max-w-36"/>
            </div>
            <p className="text-xs text-center mb-6">© Hiupy 2024. Todos los derechos reservados.</p>
        </div>

    );
};