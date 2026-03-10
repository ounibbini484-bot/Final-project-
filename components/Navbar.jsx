import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext.jsx'
const NavBar = ()=> {
  const { cartItems } = useContext(CartContext)
   return (
    <nav name ="navbar">
     <h2 className='logo'>
     <Link to = "/">Home</Link>
</h2> 
<div className="nav-links">
  <Link to = "/"> Ordering food</Link>
  <link to = "/cart"> Cart ({cartItems.length})</link>
  Cart{itemCount >0 &&<span name = "cart-count">{itemCount}</span>}
  </link>

</div>

</nav>
   )
 }
 export default Navbar
