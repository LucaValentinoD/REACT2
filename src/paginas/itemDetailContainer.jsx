import React, { useContext, useState } from 'react';
import { ProductContext } from '../Context/productos';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Context/cartContext';
import './productos.css';

function DetalleProd() {
    const { id } = useParams();
    const productos = useContext(ProductContext);
    const producto = productos.find(prod => prod.id === id);

    if (!producto) {
        return <h2>El producto no existe!</h2>;
    }

    const { handleAddToCart, removeCart, cart } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);

    const agregarAlCarrito = () => {
        console.log(`Cantidad seleccionada: ${cantidad}`);
        if (cantidad > producto.stock) {
            console.log(`No hay suficiente stock. Solo hay ${producto.stock} unidades disponibles.`);
            return;
        }
        console.log(`Agregando ${cantidad} de ${producto.nombre} al carrito.`);
        handleAddToCart(producto, cantidad);
    };

    const eliminarDelCarrito = () => {
        const itemInCart = cart.find(prod => prod.id === producto.id);
        if (itemInCart) {
            console.log(`Eliminando 1 de ${itemInCart.nombre} del carrito.`);
            removeCart(producto.id);
        } else {
            alert('El producto no está en el carrito.');
        }
    };

    return (
<div className='cuadradito2'>
    <div>
        <h1>Detalles del Producto</h1>
        <h2 className='name'>{producto.nombre}</h2>
        <img className="imgg" src={producto.imagen} alt={producto.nombre} />
    </div>
    <div className="right-side">
        <p className='descri'>{producto.descripcion}</p>
        <h3 className='precio'>${producto.precio}</h3>
        <input 
            type="number" 
            min="1" 
            max={producto.stock} 
            value={cantidad} 
            onChange={(e) => {
                const newCantidad = Math.max(1, Math.min(producto.stock, Number(e.target.value)));
                setCantidad(newCantidad);
            }}
        />
        <div className='botones'>
            <button className="añadir" onClick={agregarAlCarrito}>Añadir</button>
            <button className="eliminar" onClick={eliminarDelCarrito}>Eliminar del Carrito</button>
        </div>
    </div>
</div>

    );
}

export default DetalleProd;
