import React, { useState, useEffect } from 'react';
import { collection, doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../../firebaseConfig';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const collectionProd = collection(db, 'products');
        const ref = doc(collectionProd, id);

        getDoc(ref)
            .then((response) => {
                setItem({
                    id: response.id,
                    ...response.data(),
                });
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return (
        <div className="detailContainer">
            {loading ? <h2>Cargando...</h2> : <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;


