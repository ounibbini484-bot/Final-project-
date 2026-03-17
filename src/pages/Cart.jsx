import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <div>
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <Link to="/" className='btn'>Browse Menu</Link>
        </div>
      ) : (
        <div>
          <div>
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div>
            <button> +</button>
             <button> - </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart