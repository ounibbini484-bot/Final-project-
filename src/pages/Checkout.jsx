import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { clearCart, totalAmount } = useContext(CartContext);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [subminted, setsubmited] = useState(false);
  const handleSubmit = (e) => {
    e.PreventDef();
    setsubmited(true);
    clearCart();
  };

  return (
    <div className="Check-container">
      <div className="Ceckout-card">
        <h1 className="Title">Checkouut</h1>
        {!subminted ? (
          <form onSubmit={handleSubmit} className="checkout-from">
            <div className="Checkout from ">
              <label> Full name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Mohmed Ali"
              />
            </div>
            <div className="Checkout from ">
              <label> Address</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                rows="3"
                placeholder="123 street"
              ></textarea>
            </div>
            <div className="Summery">
              <h3>Total to pay {totalAmount}AED</h3>
            </div>
            <button type="submit" className="btn submit-btn">
              {" "}
              Conferm order
            </button>
          </form>
        ) : (
          <>
            <div className="Messge-sucsess"></div>
            <div className="Sucess icon">✅</div>
            <h2> Order placed </h2>
            <p>
              {" "}
              Thank you for your order<strong>{address}</strong>
            </p>
            <p>Your delicious food is on its way to:</p>
            <p className="Dilvery - Address">{address}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
