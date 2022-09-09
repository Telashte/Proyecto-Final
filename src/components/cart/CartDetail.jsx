import React from 'react';

const CartDetail = ({ prod, deleteItem }) => {
    return (
        <div className="infoCart">
            <img src={prod.img} alt={prod.name} width="70px" />
            <h2>{prod.name}</h2>
            <h2>${prod.price}</h2>
            <h2>Cantidad: {prod.cantidad}</h2>
            <button onClick={() => deleteItem(prod.id)}>Eliminar</button>
        </div>
    );
};

export default CartDetail;
