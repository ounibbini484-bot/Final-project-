
const CartItem = ({item}) => {
  return (
    <div>
      <p>Something is here</p>
      <img src={item.image} alt={item.name} className='cart-item-image'/>
      <div className='cart-item-details'>
        <h4>{item.name}</h4>
        <p>{item.price}</p>
      </div>

    </div>
  )
}

export default CartItem