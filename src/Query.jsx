import {collection, getDocs, getFirestore,query,where } from "firebase/firestore"
import React from 'react'

function Query() {

    const db=getFirestore();

    const refItems= collection(db, "items");

    const filtrado= query(refItems, where("precio",">",2000))

    getDocs(filtrado).then(snapshot=>{
        if(snapshot.size===0){
            console.log("No Hay Resultado para la bulqueda")
        }else{
            snapshot.docs.map(prod=>console.log(prod.data()))
        }
    })
    return (
    <div>
    </div>
    )
}

export default Query
