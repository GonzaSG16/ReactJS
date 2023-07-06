import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: 'Asus TUF Gaming A15',
        price: 999.99,
        image: '../tufa15.jpg',
        category: 'computadoras',
        description: 'Laptop con procesador Ryzen 5 4600H + GTX 1650 + 8GB Ram + SSD 256GB. Excelente para gaming!',
    },
    {
        id: 2,
        name: 'iPhone 12 Pro Max 256GB',
        price: 1099.99,
        image: '../ip12pm.jpg',
        category: 'celulares',
        description: 'El mejor iPhone del mercado. 256GB, 6 GB Ram y Chip A14 Bionic que es capaz de correr todas las aplicaciones.',
    },
    {
        id: 3,
        name: 'Teclado Thermaltake X1',
        price: 199.99,
        image: '../ttx1.jpg',
        category: 'perifericos',
        description: 'El mejor teclado del mercado. Switches Blue y ergonomico. Hecho de plastico de la mejor calidad y letras impresas a laser.',
    },
];

function ItemDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const selectedProduct = products.find((product) => product.id === parseInt(id));
        setProduct(selectedProduct);
    }, [id]);

    return (
        <div>
            {product ? (
                <div>
                    <h1>{product.name}</h1>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={product.image} alt={product.name} className="img-fluid rounded-start" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Descripción:</h5>
                                    <p className="card-text">{product.description}</p>
                                    <h5 className="card-title">Precio:</h5>
                                    <p className="card-text">${product.price}</p>
                                    <button className="btn btn-primary">
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
}

export default ItemDetailContainer;
