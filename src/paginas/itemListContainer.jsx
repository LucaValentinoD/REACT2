import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productosRiver from "../Javascript/productos.js";
import Producto from "./Producto.jsx";
import "./productos.css";

function Category() {
  const { category } = useParams(); // Mantener el nombre 'categoria'
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    console.log('Categoría seleccionada:', category); // Imprimir la categoría seleccionada
    
    const filtrados = productosRiver.filter(prod => 
      prod.category.toLowerCase() === category.toLowerCase() // Filtrar usando 'categoria'
    );

    console.log('Productos disponibles:', productosRiver);
    console.log('Productos filtrados:', filtrados);
    setProductosFiltrados(filtrados);
  }, [category]);

  return (
    <div className="bodyprod">
      <div className="jose">
        <div className="producto">
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((prod) => (
              <Producto key={prod.id} {...prod} />
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
