import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/productos.jsx";
import Item from "./item.jsx";
import { LoadContext } from "../Context/loadContex"; 
import "./productos.css";

function Category() {
  const { category } = useParams();
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [error, setError] = useState(null);

  const productos = useContext(ProductContext);
  const { load, setLoad } = useContext(LoadContext);

  useEffect(() => {
    setLoad(true);
    console.log("Categoría seleccionada:", category);

    if (productos.length > 0) {
      const filtrados = productos.filter((prod) =>
        prod.category.toLowerCase() === category.toLowerCase()
      );

      console.log("Productos disponibles:", productos);
      console.log("Productos filtrados:", filtrados);
      setProductosFiltrados(filtrados);
    } else {
      setError("No se han cargado los productos aún.");
    }

    setLoad(false);

  }, [category, productos, setLoad]);
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

export default Category;
