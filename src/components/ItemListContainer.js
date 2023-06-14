import React from 'react';

const ItemListContainer = ({ greeting }) => {
    const products = [
        {
            id: 1,
            name: 'Asus TUF Gaming A15',
            price: 999.99,
            image: 'tufa15.jpg',
        },
        {
            id: 2,
            name: 'iPhone 12 Pro Max 256GB',
            price: 1099.99,
            image: 'ip12pm.jpg',
        },
        {
            id: 3,
            name: 'Teclado Thermaltake X1',
            price: 199.99,
            image: 'ttx1.jpg',
        },
    ];

    return (
        <div className="container">
            <h2>{greeting}</h2>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4" key={product.id}>
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">${product.price}</p>
                                <a href="#" className="btn btn-primary">Agregar al carrito</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemListContainer;
