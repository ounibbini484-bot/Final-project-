import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({item}) => {
  const {updateQuantity, removeFromCart} = useContext(CartContext)
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className='cart-item-image'/>
      <div className='cart-item-details'>
        <h4>{item.name}</h4>
        <p>{item.price}</p>
      </div>
      <div className="cart-item-actions">
       <button className="qty-btn"
       onClick={()=>updateQuantity(item.id, -1)}>-
       </button>
       <span className="qty">{item.quantity}</span>
        <button className="qty-btn"
       onClick={()=>updateQuantity(item.id, +1)}>
        +
       </button>


      </div>
      <button className="remove-btn" onClick={()=>removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem