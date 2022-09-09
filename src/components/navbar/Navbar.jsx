import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebaseConfig';
import CartWidget from './CartWidget';

const Navbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const collectionCategories = collection(db, 'categories');

        getDocs(collectionCategories).then((response) => {
            const categories = response.docs.map((snap) => {
                return {
                    id: snap.id,
                    ...snap.data(),
                };
            });
            setCategories(categories);
        });
    }, []);


    return (
        <nav>
            <Link to="/">
                <h1>Proyecto Final</h1>
            </Link>
            <ul>
                {categories.map((category) => (
                    <Link
                        style={{ margin: '0px 6px' }}
                        key={category.id}
                        to={category.path}
                    >
                        {category.name}
                    </Link>
                ))}
            </ul>
            <Link className="links" to="/cart">
                <CartWidget />
            </Link>
        </nav>
    );
};

export default Navbar;
