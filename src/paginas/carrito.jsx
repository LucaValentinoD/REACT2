import React from 'react'
import { useContext } from 'react';
import "./carrito.css"

function Carrito() {
  return (
    <div className='boddy'>
        <div className='container2'>      
            <img src='.\src\assets\carrito-de-compras.png' alt="Logo" className='logo' />
            <div className='vacio'>Tu Carrito esta vacio.</div>
        </div>

    </div>
  )
}

export default Carrito
