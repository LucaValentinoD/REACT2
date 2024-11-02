import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productosRiver from "../Javascript/productos.js";
import Producto from "./Producto.jsx";
import "./productos.css";

function Category() {
    const { category } = useParams();
    const [productosFiltrados, setProductosFiltrados] = useState([]);

    useEffect(() => {
        // Filtrar productos según la categoría seleccionada
        const filtrados = productosRiver.filter(prod => prod.categoria === category);
        setProductosFiltrados(filtrados);
    }, [category]);

    if (productosFiltrados.length === 0) {
        return <h2>No hay productos en esta categoría</h2>;
    }

    return (
        <div className='bodyprod'>
            <div className='jose'>
                <div className='producto'>
                    {productosFiltrados.map(prod => (
                        <Producto key={prod.id} {...prod} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Category;
