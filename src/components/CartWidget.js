import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    const notificationNumber = 3;

    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
            <span className="notification">{notificationNumber}</span>
        </div>
    );
};

export default CartWidget;
