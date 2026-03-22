import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { clearCart, totalAmount } = useContext(CartContext);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  return (
    <div className="checkout-container container">
      <div className="checkout-card">
        <h1 className="page-title">Checkout</h1>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Mohmed Ali"
              />
            </div>
            <div className="form-group">
              <label>Delivery Address</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                rows="3"
                placeholder="123 street"
              ></textarea>
            </div>
            <div className="checkout-summary">
              <h3>Total to pay: {totalAmount} AED</h3>
            </div>
            <button type="submit" className="btn submit-btn">
              Confirm Order
            </button>
          </form>
        ) : (
          <>
            <div className="success-message"></div>
            <div className="sucess-icon">✅</div>
            <h2>Order Placed Successfully</h2>
            <p>Thank you for your order<strong>{name}</strong>.</p>
            <p>Your delicious food is on its way to:</p>
            <p className="delivery-address">{address}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
