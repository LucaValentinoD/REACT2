import React from 'react'
import './productos.css'
function Producto({nombre, precio, descripcion, imagen}) {
  return (
    <div className="producto">
      <div>{nombre}</div>
      <img src={imagen} alt={nombre} />
      <div>{descripcion}</div>
      <div>{precio}</div>
    </div>
  )
}

export default Producto
