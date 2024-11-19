import React, { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const db = getFirestore();
            const itemCollection = collection(db, "items");
            const snapshot = await getDocs(itemCollection);
            const productosArray = snapshot.docs.map((docu) => ({
                id: docu.id,
                ...docu.data(),
            }));
            setProductos(productosArray);
        };

        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={productos}>
            {children}
        </ProductContext.Provider>
    );
}

export const useProducts = () => useContext(ProductContext);
export { ProductContext };
