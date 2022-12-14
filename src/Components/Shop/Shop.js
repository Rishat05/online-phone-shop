import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Question from '../Question/Question';
import './Shop.css';
const Shop = () => {

    const [products, setproducts] = useState([]);
    const [cart, setcart] = useState([]);
    const [phone, setphone] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setproducts(data));
    }, [])


    const handleAddToCart = (product) => {
        // console.log(product);
        const check = cart.find(oldProduct => oldProduct.id === product.id)

        if (!check) {
            if (cart.length < 4) {
                const newCart = [...cart, product];
                setcart(newCart);
            }
        }
    }

    const handleOneItem = (product) => {

        const randomNumber = Math.floor(Math.random() * (cart.length - 1 - 0 + 1)) + 0;
        //console.log(randomNumber);
        setphone(cart[randomNumber]);

    }

    const resetcart = (deleteAllCart) => {
        setphone([]);
        setcart([]);
    }

    return (
        <div className='shop'>
            <div className='shop-container'>
                <div className="product-container">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >
                        </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart
                        cart={cart}
                        handleOneItem={handleOneItem}
                        phone={phone}
                        resetcart={resetcart}
                    ></Cart>
                </div>
            </div>

            <Question></Question>
        </div>
    );
};

export default Shop;