
import { NavBar } from "../../components";
import { AddProdForm } from "./AddProdForm";


export const AddProduct = () => {
    
    return (
        <div>
            <NavBar />
            <div className="w-11/12 mx-auto">
                <h2 className="text-md mt-4 text-center font-semibold">
                    Agregá tu producto
                </h2>
                <AddProdForm />
            </div>
        </div>
    );
};
