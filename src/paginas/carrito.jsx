import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../Context/cartContext';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "./carrito.css";

function Carrito() {
    const { cart, removeCart, handleAddToCart, clearCart } = useContext(CartContext);

    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ email: '', nombre: '' });
    const [formErrors, setFormErrors] = useState({});
    const [orderId, setOrderId] = useState(null);

    const agregarCompra = async () => {
        const items = cart.map(prod => ({
            nombre: prod.nombre,
            cantidad: prod.cantidad,
            precio: prod.precio,
            total: prod.precio * prod.cantidad,
        }));

        const totalCompra = cart.reduce((total, prod) => total + (prod.precio * prod.cantidad), 0);

        const compra = {
            cliente: {
                email: formData.email,
                nombre: formData.nombre,
            },
            items: items,
            total: totalCompra,
            fecha: new Date(),
        };

        try {
            const db = getFirestore();
            const compraCollection = collection(db, "compras");
            const docRef = await addDoc(compraCollection, compra);  // Agrega la compra a Firestore
            console.log("Compra realizada con ID:", docRef.id); // Verifica el ID que se obtiene
            setOrderId(docRef.id);  // Guarda el ID de la compra
            clearCart();  // Limpiar el carrito
            setShowForm(false);  // Cierra el formulario después de realizar la compra
        } catch (error) {
            console.error("Error al realizar la compra:", error);
        }
    };

    const handleRemoveItem = (id) => {
        removeCart(id);
    };

    const agregarAlCarrito = (producto) => {
        const cantidad = 1;

        if (cantidad > producto.stock) {
            console.log(`No hay suficiente stock. Solo hay ${producto.stock} unidades disponibles.`);
            return;
        }

        handleAddToCart(producto, cantidad);
    };

    const totalAmount = cart.reduce((total, prod) => total + (prod.precio * prod.cantidad), 0);

    const validateForm = () => {
        let errors = {};
        if (!formData.email) errors.email = "El email es obligatorio.";
        if (!formData.nombre) errors.nombre = "El nombre es obligatorio.";

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            agregarCompra();  // Si el formulario es válido, se agrega la compra
        } else {
            console.log("Por favor, complete todos los campos.");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Agregar un useEffect para depurar y ver cuando `orderId` cambia
    useEffect(() => {
        if (orderId) {
            console.log("ID de compra actualizado:", orderId);
        }
    }, [orderId]);

    return (
        <div className='boddy'>
            {cart.length === 0 ? (
                <div className='container2'>
                {orderId ? (
                    <div>
                        <h3>¡Compra realizada con éxito!</h3>
                        <p>Tu ID de compra es: <strong>{orderId}</strong>, usala en Correo Argentino para verificar el camino de tu compra.</p>
                    </div>
                ) : (
                    <div className='vacio'>
                        Tu Carrito está vacío.
                        <img src='.\src\assets\carrito-de-compras.png' alt="Logo" className='logo' />
                    </div>
                )}
                </div>
            ) : (
                <div className='container2'>
                    <div>
                        {cart.map(prod => {
                            return (
                                <div key={prod.id}>
                                    <img className='img' src={prod.imagen} alt={prod.nombre} />
                                    <div>{prod.nombre}</div>
                                    <div>Precio: ${prod.precio}</div>
                                    <div>Cantidad: {prod.cantidad}</div>
                                    <div>Total: ${prod.precio * prod.cantidad}</div>
                                    <button onClick={() => agregarAlCarrito(prod)}>Añadir</button>
                                    <button onClick={() => handleRemoveItem(prod.id)}>Eliminar</button>
                                </div>
                            );
                        })}
                    </div>
                    <div className='Total'>
                        <h3>Su compra tiene un total de: ${totalAmount}</h3>

                        <h3>Finalizar Compra</h3>
                        <button onClick={() => setShowForm(true)}>Confirmar Compra</button>

                        {showForm && (
                            <form className="form" onSubmit={handleSubmit}>
                                <div className="title">Para terminar, rellene lo siguiente:</div>

                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    className="input"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {formErrors.email && <span className="error">{formErrors.email}</span>}

                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    name="nombre"
                                    className="input"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                />
                                {formErrors.nombre && <span className="error">{formErrors.nombre}</span>}

                                <button className="button-confirm" type="submit">Finalizar →</button>
                            </form>
                        )}

                        {orderId && (
                            <div className="order-id">
                                <h3>¡Compra realizada con éxito!</h3>
                                <p>Tu ID de compra es: <strong>{orderId}</strong></p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Carrito;
