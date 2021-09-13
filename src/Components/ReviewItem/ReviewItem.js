import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {name, quantity, key} = props.product;
    const removeProduct = props.product;
    return (
        <div className="review-item">
            <h3 className="porduct-name">{name}</h3>
            <p> Quantity:  {quantity}</p>
            <br />
            <button className="main-btn" onClick = {() => props.removeProduct(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;