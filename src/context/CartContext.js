import React, { useEffect, useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [unidades, setTotalUnidades] = useState(0);

    const addToCart = (productToAdd) => {
        if (!isOnCart(productToAdd.id)) {
            setCart([...cart, productToAdd]);
        } else {
            const cartUpdated = cart.map((prod) => {
                if (prod.id === productToAdd.id) {
                    const productUpdated = {
                        ...prod,
                        cantidad: productToAdd.cantidad,
                    };
                    return productUpdated;
                } else {
                    return prod;
                }
            });

            setCart(cartUpdated);
        }
    };

    const isOnCart = (id) => cart.some((prod) => prod.id === id);

    const totalPrice = () => {
        let count = 0;
        const copia = [...cart];
        copia.forEach((prod) => {
            count += prod.cantidad * prod.price;
        });
        setTotal(count);
    };

    const totalUnidades = () => {
        let count = 0;
        const copia = [...cart];
        copia.forEach((prod) => {
            count += prod.cantidad;
        });
        setTotalUnidades(count);
    };

    const deleteItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id));
    };

    const deleteAll = (_) => setCart([]);

    const getProductQuantity = (id) => {
        const product = cart.find((prod) => prod.id === id);

        return product?.cantidad;
    };

    useEffect(() => {
        totalPrice();
        totalUnidades();
        console.log('cart :', cart);
     
    }, [cart]);

    return (
        <CartContext.Provider
            value={{
                cart,
                total,
                unidades,
                addToCart,
                deleteItem,
                getProductQuantity,
                deleteAll,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
