
const CartItem = ({item}) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className='cart-item-image'/>
      <div className='cart-item-details'>
        <h4>{item.name}</h4>
        <p>{item.price}</p>
      </div>
      <div className="cart-item-actions">
        <button className="qty-btn">-</button>
        <span className="qty">{item.quantity}</span>
        <button className="qty-btn">+</button>
      </div>

      <button className="remove-btn">Remove</button>
    </div>
  )
}

export default CartItem