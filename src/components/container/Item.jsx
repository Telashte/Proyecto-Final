import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <Link to={`/detail/${item.id}`}>
            <div className="item">
                <img src={item.img} alt="" />
                <div>
                    <h2>{item.name}</h2>
                    <h4>$ {item.price}.-</h4>
                </div>
            </div>
        </Link>
    );
};

export default Item;
