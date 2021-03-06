import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData'
import './Revies.css'
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [ cart, setCart] = useState([])

    const removeProduct = (productKey) => {
        const newCart = cart.filter( pd => pd.key !== productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }

    useEffect(() => {
        // cart 
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map( key => {
            const product = fakeData.find( pd => pd.key === key);
            product.quantity = savedCart[key]
            return product
        })
        setCart(cartProducts)
    },[])
    return (
        <div>
            <h2>Cart Items: {cart.length}</h2>
            {
                cart.map(pd => <ReviewItem 
                    removeProduct = {removeProduct}
                    key ={pd.key}
                    product = {pd}></ReviewItem>)
            }
        </div>
    );
};

export default Review;