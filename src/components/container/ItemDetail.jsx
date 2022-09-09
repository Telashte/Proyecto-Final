import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../container/ItemCount';

const ItemDetail = ({ item }) => {
    //console.log('product :', item);
    const [cant, setCant] = useState(0);

    const { addToCart, getProductQuantity } = useContext(CartContext);

    const onAdd = (cantidad) => {
        setCant(cantidad);
        const productToAdd = {
            ...item,
            cantidad,
        };
        addToCart(productToAdd);
    };

    const productQuantity = getProductQuantity(item.id);

    return (
        <div className="detail">
            <img src={item.img} alt={item.name} width="400" />
            <div>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <h3>$ {item.price}</h3>
                {cant === 0 ? (
                    <ItemCount
                        stock={item.stock}
                        initial={productQuantity}
                        onAdd={onAdd}
                    />
                ) : (
                    <Link to="/cart">Ver carrito</Link>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;
