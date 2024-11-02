import React from 'react'
import productosRiver from '../Javascript/productos'
import { useParams } from 'react-router-dom'
import './productos.css';
function detadelprod() {
    const {id} = useParams();
    const producto= productosRiver.find(prod=>prod.id===(id))
    if(!producto){
        return<h2>El producto no existe!</h2>
    }
    return (
    <div className='cuadradito2'>
        <h1>Detalles del Producto</h1>
        <h2 className='name'>{producto.nombre}</h2>
        <img src={producto.imagen} alt={producto.nombre} />
        <p className='descri'>{producto.descripcion}</p>
        <h3 className='precio'>${producto.precio}</h3>
    </div>
)
}

export default detadelprod
