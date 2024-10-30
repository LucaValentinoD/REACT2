import React from 'react'
import Navbar from'../navbar.jsx'
import productosRiver from "../Javascript/productos.js"
import Producto from "./Producto.jsx"
import './productos.css'
function productos() {
  return (
    <div className='fondo'>
    <Navbar/>
      <div className='producto'>
        {productosRiver.map(prod=>(
          <Producto key={prod.id} {...prod}/>
        ))}
      </div>
    </div>
  )
}

export default productos
