import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    //  shipping 
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }

    const tax = total / 10
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h2>This is cart</h2>
            <h3>Order summary </h3>
            <p>Items ordered: {cart.length}</p>
            <p>Product price : {formatNumber(total)}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax + VAT: {tax}</p>
            <p>Total price: {grandTotal}</p>
            <br />
            <Link to ="/review">
                <button className="main-btn">Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;