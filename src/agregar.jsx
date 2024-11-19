import { addDoc, collection, getFirestore, refEqual} from "firebase/firestore"

import React from 'react'

function agregar() {
    const item= {
        nombre: "Zapatillas",
        descripcion: "zapatilla",
        category:"hombre",
        image:"img.jpg",
        precio:"9000",
        stock: 12
    }

    const db = getFirestore();

    const itemCollection = collection(db,"items")

    addDoc(itemCollection, item). then(({id})=>{
        console.log(id);
        console.log("Item agregado correctamente a la base de dt")
    })
  return (
    <div>
      
    </div>
  )
}

export default agregar

