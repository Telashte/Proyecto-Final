import React, { useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const [count, setCount] = useState(1);

    const incrementar = () => {
        count !== stock && setCount(count + 1);
    };

    const disminuir = () => {
        count !== initial && setCount(count - 1);
    };

    return (
        <div className="counter">
            <div className="counter-btn">
                <button onClick={disminuir}>-</button>
                <p>{count}</p>
                <button onClick={incrementar}>+</button>
            </div>

            <div>
                <button className="add-btn" onClick={() => onAdd(count)}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ItemCount;
