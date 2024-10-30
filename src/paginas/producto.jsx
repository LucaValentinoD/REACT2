import React from 'react'
import "/productos.css"

function producto({nombre, precio, descripcion}) {
  return (
    <div className="producto">
      <div>{nombre}</div>
      <div>{descripcion}</div>
      <div>{precio}</div>
    </div>
  )
}

export default producto
