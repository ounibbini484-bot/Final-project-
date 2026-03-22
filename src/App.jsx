import Home from "./pages/Home"
import Navbar  from "./components/Navbar"
import { Routes,Route } from 'react-router-dom'
import Cart from "./pages/Cart"
import CartItem from "./components/CartItem"
import Checkout from "./pages/Checkout"


function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/cart" element={ <Cart/> }/>
      <Route path="/cartitem" element={ <CartItem/> }/>
      <Route path="/checkout" element={ <Checkout/> }/>

    </Routes>
  
    </>
  )
}

export default App
