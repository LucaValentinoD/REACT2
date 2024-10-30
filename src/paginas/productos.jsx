import React from 'react'
import Navbar from'../navbar.jsx'
import productosRiver from "../Javascript/productos.js"
function futctos() {
  return (
    <>
      <Navbar/>
      <div>
        {productosRiver.map(prod=>(
          <Prodcuto key={prod.id} {...prod}/>
        ))
        
        
        
        }
      </div>
    </>
  )
}

export default futctos
