import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from './ItemList';
import { db } from '../../firebaseConfig';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        const collectionProd = collection(db, 'products');

        const ref = categoryId
            ? query(collectionProd, where('category', '==', categoryId))
            : collectionProd;

        getDocs(ref)
            .then((snap) => {
                const products = snap.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    };
                });
                setItems(products);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            {loading ? (
                <h1>Cargando productos...</h1>
            ) : (
                <ItemList items={items} />
            )}
        </div>
    );
};

export default ItemListContainer;


