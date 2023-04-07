import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }
    else{
        message = <div>
            <h3>Boroluxxxx</h3>
            <p><small>Thanks for giving your Money</small></p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order Summary: {cart.length}</h2>
            <p className={`bold bordered ${cart.length===3 ?  'yellow': 'purple'}`}>something</p>
            {cart.length > 2 ? <span className='purple'>Aro Kino</span> : <span>Gorippp</span>}
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button
                    onClick={() => handleRemoveFromCart(tshirt._id)}
                >D</button></p>)
            }
            {
                cart.length === 2 && <p>Double bonanza!!!</p>
            }
            {
                cart.length ===3 || <h3>Tinta to hoilo na!!</h3>
            }
        </div>
    );
};

export default Cart;

/**
 * Conditional Rendering
 * 1. use if or if else to set a variable that will contain an element, components
 * 2. ternary: condition ? 'for true' : 'flase'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical ||: (if the condition is false then the next thing will be displayed)
 * */ 

/**
 * Conditional Style
 * 1. use ternary
 * 2. ternary inside template string
 * */ 