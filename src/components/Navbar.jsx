// import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
//import { CartContext } from '../context/CartContext.jsx'

const NavBar = ()=> {
  //const { cartItems } = useContext(CartContext)
   return (
    <nav name ="navbar">
     <h2 className='logo'>
     <Link to = "/">Home</Link>
</h2> 
<div className="nav-links">
  <Link to = "/"> Ordering food</Link>

  {/* Cart{itemCount >0 &&<span name = "cart-count">{itemCount}</span>} */}

</div>

</nav>
   )
 }
 export default NavBar
