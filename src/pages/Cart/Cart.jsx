import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  // Function to calculate total cost
  const calculateTotalCost = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.quantity}</span>
            <span>${item.price * item.quantity}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Total Cost: ${calculateTotalCost()}</h3>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
