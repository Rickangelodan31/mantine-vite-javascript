import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../actions/cartActions";

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
  };

  return (
    <div>
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div>
            {cartItems.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt={item.name} />
                <p>{item.course}</p>
                <p>${item.totalcost}</p>
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div>
            {/* Payment method selection */}
            <h2>Select Payment Method</h2>
            <label>
              <input type="radio" name="paymentMethod" value="creditCard" />
              Credit Card
            </label>
            <label>
              <input type="radio" name="paymentMethod" value="paypal" />
              PayPal
            </label>
          </div>
          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
