import { useState, useEffect } from "react";
import axios from "axios";
import "./Cart.css";


const API_URL = "http://localhost:4000";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState();
  const [total, setTotal] = useState(0);

  const fetchCart = async () => {
    try {
      const response = await fetch(`${API_URL}/carts/1`);
      const parsed = await response.json();
      console.log(parsed);
      if (parsed.products && parsed.products.length !== 0) {
        setCartItems(parsed.products);
        const reduced = parsed.products.reduce((acc, item) => {
          return acc + (item.product.totalcost * item.count);
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
    try {
      const copy = JSON.parse(JSON.stringify(cartItems));
      const foundProduct = copy.find(item => item.product.id === id);
      if (foundProduct.count === 1) {

        const filtered = copy.filter((item) => item.product.id !== id);
        console.log("filtered", filtered)
        const body = JSON.stringify({ products: filtered });
        const response = await fetch(`${API_URL}/carts/1`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body,
        });
        const parsed = await response.json();
        console.log(parsed);
        await fetchCart();
      } else {
        const newProducts = copy.map((item) => {
          if (item.product.id === id) {
            let { count, product } = item;
            count -= 1;
            return { count, product }
          } else {
            return item
          }
        })
        const body = JSON.stringify({ products: newProducts })
        const response = await fetch(`${API_URL}/carts/1`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body,
        });
        const parsed = await response.json()
        console.log(parsed)
        await fetchCart();
      }
    } catch (error) {
      console.log(error);
    }

  };

  const addMoreToCart = async (id) => {
    try {
      const copy = JSON.parse(JSON.stringify(cartItems));

      const changedCart = copy.map(item => {
        if (item.product.id === id) {
          let { count, product } = item;
          count += 1
          return { count, product }
        } else {
          return item
        }
      })
      const body = JSON.stringify({ products: changedCart })
      const response = await fetch(`${API_URL}/carts/1`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body,
      });
      const parsed = await response.json()
      console.log(parsed)
      await fetchCart();
    } catch (error) {
      console.log(error)
    }
  }



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
            <li key={item.product.id}>
              <span>{item.product.course}</span>
              <span>Price: ${item.product.totalcost}</span>
              <span>Count: {item.count}</span>
              <button onClick={() => addMoreToCart(item.product.id)}>+</button>
              <button type="button" onClick={() => removeFromCart(item.product.id)}>-</button>
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
