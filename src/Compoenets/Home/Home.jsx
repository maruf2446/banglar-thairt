import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshart from '../Tshart/Tshart';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
    const tsharts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            toast('You have alreay added this t-shirt')
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }

    const handleRemoveFromCart = _id => {
        const remaining = cart.filter(ts => ts._id !== _id);
        setCart(remaining)
    }

    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tsharts.map(tshirt => <Tshart
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshart>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;