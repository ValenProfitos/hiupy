import { NavLink } from "react-router-dom";

export const AddProdButton = () => {
    return (
        <>
            <NavLink to="/Add">
                <button className="fixed bottom-5 right-5 text-3xl bg-e2a748 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded-full">
                    +
                </button>
            </NavLink>
        </>
    );
};
