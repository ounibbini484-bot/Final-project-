
import { Link } from 'react-router-dom'
import '../App.css'
const NavBar = ()=> {

   return (
    <nav className ="navbar">
     <h2 className='logo'>
     <Link to = "/">Food Ordering App</Link>
</h2> 
<div className="nav-links">
  <Link to = "/">Menu</Link>
  <Link to = "/cart">Cart</Link>

</div>

</nav>
   )
 }
 export default NavBar
