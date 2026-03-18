
const CartItem = ({item}) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className='cart-item-image'/>
      <div className='cart-item-details'>
        <h4>{item.name}</h4>
        <p>{item.price}</p>
      </div>
      <div className="cart-item-actions">
       <button className="qty-btn"
       onAuxClick={()=>onDecrease(item.id)}>-
       </button>
       <span className="qty">{item.quantity}</span>
        <button className="qty-btn"
       onAuxClick={()=>onIncrease(item.id)}>
        +
       </button>


      </div>


      <button className="remove-btn" onAuxClick={()=>removeItem(item.id)}>Remove </button>
    </div>
  );
};

export default CartItem