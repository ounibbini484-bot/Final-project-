import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {
  const { cartItems, totalAmount } = useContext(CartContext)

  return (
    <div className='cart-container containter'>
      <h1 className='page-title'>Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className='empty-cart'>
          <Link to="/home" className='btn'>Browse Menu</Link>
        </div>
      ) : (
        <>
          <div className='cart-items'>
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total amount: {totalAmount} AED</h2>
            <Link to="/checkout">Proceed to Checkout</Link>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart