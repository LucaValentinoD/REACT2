import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

function Collection() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "items");

        getDocs(itemCollection).then((snapshot) => {
            const productos = snapshot.docs.map((docu) => ({
                id: docu.id,
                ...docu.data(),
            }));
            setProductos(productos);
        });
    }, []);

    console.log(productos);

    return (
        <>
        </>
    );
}

export default Collection;
