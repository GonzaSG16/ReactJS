import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: 'Asus TUF Gaming A15',
        price: 999.99,
        image: '../tufa15.jpg',
        category: 'computadoras',
    },
    {
        id: 2,
        name: 'iPhone 12 Pro Max 256GB',
        price: 1099.99,
        image: '../ip12pm.jpg',
        category: 'celulares',
    },
    {
        id: 3,
        name: 'Teclado Thermaltake X1',
        price: 199.99,
        image: '../ttx1.jpg',
        category: 'perifericos',
    },
];

function ItemListContainer() {
    const { id } = useParams();
    const [categoryProducts, setCategoryProducts] = useState([]);

    useEffect(() => {
        if (id) {
            const filteredProducts = products.filter(product => product.category === id);
            setCategoryProducts(filteredProducts);
        } else {
            setCategoryProducts(products);
        }
    }, [id]);

    return (
        <div className="page-container">
            <h1>Nuestros productos</h1>
            <div className="row">
                {categoryProducts.map(product => (
                    <div className="col-lg-4" key={product.id}>
                        <div className="card" style={{ margin: '10px' }}>
                            <img src={product.image} className="card-img-top" alt={product.name} style={{ height: '100%', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">${product.price}</p>
                                <a href={`/item/${product.id}`} className="btn btn-primary">Ver detalles</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemListContainer;
