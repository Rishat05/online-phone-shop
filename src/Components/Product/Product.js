import React from 'react';

const Product = (props) => {
    const { id, name, img, price } = props.product;

    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className='product-name'>{name}</h3>
            </div>
        </div>
    );
};

export default Product;