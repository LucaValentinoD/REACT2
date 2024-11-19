import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import productosRiver from "../Javascript/productos.js";
import Item from "./item.jsx";
import { LoadContext } from "../Context/loadContex"; 
import "./productos.css";

function Inicio() {
  const { Inicio } = useParams();
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [error, setError] = useState(null);
  const { load, setLoad } = useContext(LoadContext);

  useEffect(() => {
    setLoad(true);
    console.log("Categoría seleccionada:", Inicio);

  const fetchProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productosRiver);
      }, 1000);
    });
  };

  fetchProductos()
    .then((productos) => {
      const filtrados = productos.filter((prod) =>
        prod.Inicio.toLowerCase() === Inicio.toLowerCase()
      );

      setProductosFiltrados(filtrados);
      setLoad(false);
    })
    .catch((err) => {
      console.error(err);
      setError("Hubo un error al cargar los productos.");
      setLoad(false);
    });
}, [Inicio, setLoad]);

return (
  <div className="bodyprod">
    <div className="jose">
      <div className="producto">
        {load ? (
          <h2>Cargando productos...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : productosFiltrados.length > 0 ? (
          productosFiltrados.map((prod) => <Item key={prod.id} {...prod} />)
        ) : (
          <h2>No hay productos en esta categoría</h2>
        )}
      </div>
    </div>
  </div>
);
}

export default Inicio
