import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartDetail from './CartDetail';

const Cart = () => {
    const { cart, deleteItem, total, deleteAll } = useContext(CartContext);

    return (
        <>
            {cart.length === 0 ? (
                <div className="empty">El carrito está vacio</div>
            ) : (
                <>
                    <div className="cart">
                        {cart.map((prod) => (
                            <CartDetail
                                prod={prod}
                                deleteItem={deleteItem}
                                key={prod.id}
                            />
                        ))}
                        <div className="cartBtn">
                            <h2>Total: ${total}</h2>
                            <button onClick={deleteAll}>Vacia el carrito</button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Cart;
