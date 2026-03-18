import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <div className='cart-container containter'>
      <h1 className='page-title'>Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className='empty-cart'>
          <Link to="/" className='btn'>Browse Menu</Link>
        </div>
      ) : (
        <>
          <div className='cart-items'>
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total amount: 65 AED</h2>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart