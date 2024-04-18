import { useState, useEffect } from "react";
import axios from "axios";

const Cart = ({ cartItems }) => {
 console.log(cartItems);
  

//   // Function to remove item from cart
//   const removeFromCart = (itemId) => {
//     const updateCart = cartItems.filter((item) => item.id !== itemId);

//     setCartItems(updateCart);
//   };

//   // Function to calculate total cost
//   const calculateTotalCost = () => {
//     if (!cartItems || cartItems.length === 0) {
//       return 0;
//     }
//     return cartItems.reduce(
//       (total, item) => total + (Number(item.price) * Number(item.quantity)),
//       0
//     );
//   };

const getDefaultCar = () => {
  let cart = {};
  for (let i =1; i < Course.length +1; i++) {
    return cart;
  } 
const [cartItems, setCartItems] = useState([]);
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
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
}

export default Cart;
