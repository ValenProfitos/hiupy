/* eslint-disable react/prop-types */
import InventoryContext from "./InventoryContext"
import useApiData from "../../Hooks/useApiData";

const InventoryContextProvider = ({ children }) => {
    const [data, loading, error] = useApiData(
        "http://localhost:3000/api/inventory/1"
    );
    // " /src/data/recetas.json"
    // console.log("Console log : ", data);

    const values = {
        data,
        loading,
        error,
    };
    return (
        <>
            <InventoryContext.Provider value={values}>
                {children}
            </InventoryContext.Provider>
        </>
    );
};

export default InventoryContextProvider;
