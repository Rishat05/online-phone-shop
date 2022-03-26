import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart, phone } = props;
    //console.log(phone);
    return (
        <div className='cart'>
            <h1>Selected phone</h1>
            {
                cart.map(product => <p key={product.id}>{product.name}</p>)
            }
            <button onClick={() => props.handleOneItem(cart)} >Choose 1 For Me</button>

            <div className='phone-info'>
                <img src={phone.img} alt="" />
                <h3> {phone.name}</h3>
                <p>{phone.id}</p>
                <p>{phone.price}</p>
            </div>

            <button onClick={() => props.resetcart(cart)}>Choose Again</button>
        </div>
    );
};

export default Cart;