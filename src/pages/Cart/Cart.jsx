import { useState, useEffect } from "react";
import axios from "axios";
import "./Cart.css";


const API_URL = "http://localhost:4000";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState();
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);

  const fetchCart = async () => {
    try {
      const response = await fetch(`${API_URL}/carts/1`);
      const parsed = await response.json();
      console.log(parsed);
      if (parsed.courses && parsed.courses.length !== 0) {
        setCartItems(parsed.courses);
        const reduced = parsed.courses.reduce((acc, item) => {
          console.log(item);
          return acc + item.totalcost;
        }, 0);
        console.log("cost", reduced);
        setTotal(reduced);
        console.log("cart", parsed.courses);
      } else {
        setError("The Cart is empty...");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromCart = async (id) => {
    const copy = JSON.parse(JSON.stringify(cartItems));
    const filtered = copy.filter((item) => item.id !== id);
    const body = JSON.stringify({ courses: filtered });
    try {
      const response = await fetch(`${API_URL}/carts/1`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body,
      });
      const parsed = await response.json();
      console.log(parsed);
      await fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  const checkout = async () => {
    try {
      const response = await fetch(`${API_URL}/carts/1`, { method: "DELETE" });
      const parsed = await response.json();
      console.log(parsed);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <h4>{error ? error : undefined}</h4>
      <ul>
        {!error &&
          cartItems.map((item) => (
            <li key={item.id}>
              <span>{item.course}</span>
              <span>Price: ${item.totalcost}</span>
              <button onClick={() => addMoreToCart(item.id)}>+</button>
              <button onClick={() => removeFromCart(item.id)}>-</button>
            </li>
          ))}
      </ul>

      <div>
        <h3>Total Cost: ${total}</h3>
        <button onClick={checkout}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
