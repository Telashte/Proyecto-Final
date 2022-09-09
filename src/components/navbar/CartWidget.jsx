import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { unidades } = useContext(CartContext);
    return (
        <div style={{ display: 'flex' }}>
            <span className="material-icons">shopping_cart</span>
            {unidades}
        </div>
    );
};

export default CartWidget;
