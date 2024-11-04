import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productosRiver from "../Javascript/productos.js";
import Item from "./item.jsx";
import "./productos.css";
function Category() {
const { category } = useParams(); // Mantener el nombre 'categoria'
const [productosFiltrados, setProductosFiltrados] = useState([]);
const [error, setError] = useState(null); 

useEffect(() => {
  console.log('Categoría seleccionada:', category);

  const fetchProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productosRiver);
      }, 1000);
    });
  };

  fetchProductos()
    .then((productos) => {
      const filtrados = productos.filter(prod => 
        prod.category.toLowerCase() === category.toLowerCase()
      );

      console.log('Productos disponibles:', productos);
      console.log('Productos filtrados:', filtrados);
      setProductosFiltrados(filtrados);
    })
    .catch((err) => {
      console.error(err);
      setError(err);
    });
}, [category]);


  return (
    <div className="bodyprod">
      <div className="jose">
        <div className="producto">
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((prod) => (
              <Item key={prod.id} {...prod} />
            ))
          ) : (
            <h2>No hay productos en esta categoría</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Category;
