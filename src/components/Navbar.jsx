import { Link, useLocation } from "react-router-dom";
import "../App.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const NavBar = () => {
  const {cartItems} = useContext(CartContext)
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const location = useLocation();

  if(location.pathname === "/login" || location.pathname === "/signup"){
    return null;
  }

  return (
    <nav className="navbar">
      <h2 className="logo">
        <Link to="/home">Food Ordering App</Link>
      </h2>
      <div className="nav-links">
        <Link to="/home">Menu</Link>
        <Link to="/cart" className="cart-link">
        Cart {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
        </Link>
        <Link to="/">Signout</Link>
      </div>
    </nav>
  );
};
export default NavBar;
