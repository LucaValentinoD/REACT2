import { useState } from 'react';
import './App.css';
import{ BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from "./paginas/Inicio.jsx";
import './paginas/Inicio.jsx';
import Contacto from './paginas/contacto.jsx';
import Category from './paginas/itemListContainer.jsx';
import Info from './paginas/info.jsx';
import Nopage from './paginas/nopage.jsx';
import Navbar from './navbar.jsx';
import Detadelprod from './paginas/itemDetailContainer.jsx';
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Inicio />}/>
        <Route path="contacto" element={<Contacto/>}/>
        <Route path="/category/:category" element={<Category/>}/>
        <Route path="info" element={<Info/>}/>
        <Route path="/detail/:id" element={<Detadelprod/>}/>
        <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>



    </>
  )
}

export default App
