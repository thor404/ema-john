import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Products/Product';
import './ProductDetail.css'

const ProductDetail = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    console.log(product)
    return (
        <div>
            <h1>Your product details</h1>
            <Product showAddToCart = {false} product= {product}></Product>
        </div>
    );
};

export default ProductDetail;