import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const navigate = useNavigate();
    const cartItems = [];

    const navigateToItemDetail = (itemId) => {
        navigate.push(`/item/${itemId}`);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '20px' }}>
            <h1>Carrito</h1>
        </div>
    );
}

export default Cart;
