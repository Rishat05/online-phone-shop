import React from 'react';
import './Product.css';
const Product = (props) => {
    const { id, name, img, price } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <p>id: {id}</p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'><p>Add to Cart</p></button>
        </div>
    );
};

export default Product;