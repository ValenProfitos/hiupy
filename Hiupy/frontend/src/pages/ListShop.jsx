import { useState } from "react";
import { NavBar, Footer } from "../components";
import PropTypes from "prop-types";

export const ListShop = () => {
  const [lista, setLista] = useState([]);
  const [nuevoItem, setNuevoItem] = useState("");

  const agregarItem = () => {
    if (nuevoItem.trim() !== "") {
      setLista([...lista, nuevoItem]);
      setNuevoItem("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      agregarItem();
    }
  };

  const ListaDeCompras = ({ lista }) => {
    return (
      <ul className="h-screen">
        {lista.map((item, index) => (
          <ItemDeCompra key={index} item={item} />
        ))}
      </ul>
    );
  };

  ListaDeCompras.propTypes = {
    lista: PropTypes.array.isRequired,
  };

  const ItemDeCompra = ({ item }) => {
    const [contador, setContador] = useState(1); 
  
    const incrementarContador = () => {
      setContador(contador + 1);
    };
  
    const decrementarContador = () => {
      if (contador > 1) {
        setContador(contador - 1);
      }
    };
  
    const estilo = {
      color: "black",
      border: "1px solid grey",
      borderRadius: "9px",
      width: "auto",
      height: "50px",
      padding: "8px",
      margin: "20px 0",
      fontWeight: "500",
      fontSize: "13px",
      listStyle: "none",
      textAlign: "left",
      lineHeight: "30px",
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", 
    };
  
  
    return (
      <li style={estilo}>
        {item}
        <div className="flex space-x-4 p-3" >
          <button className="border-2 w-9 border-[#af7d4d] text-center text-lg rounded-full text-[#af7d4d] " onClick={incrementarContador}><strong>+</strong></button>
          <span className="text-center text-lg items-center ">{contador}</span>
          <button className="border-2 w-9 border-[#af7d4d] text-center text-lg rounded-full text-[#af7d4d] " onClick={decrementarContador}><strong>-</strong></button>
        </div>
      </li>
    );
  };
  
  ItemDeCompra.propTypes = {
    item: PropTypes.string.isRequired,
  };

  return (
    <div className="p-2">
      <NavBar />
      <h3 className="text-left text-xl font-bold p-2"> A continuacion tendras la lista de compras </h3>
      <input
        className="flex w-full rounded-xl border text-sm border-light-grey p-2"
        type="text"
        placeholder="Ingresa los ingredientes a comprar"
        value={nuevoItem}
        onChange={(e) => setNuevoItem(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <ListaDeCompras lista={lista} />
      <Footer />
    </div>
  );
};
