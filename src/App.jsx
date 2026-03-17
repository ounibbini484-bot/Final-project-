import Home from "./pages/Home"
import Navbar  from "./components/Navbar"
import { Routes,Route } from 'react-router-dom'
import Cart from "./pages/Cart"
import CartItem from "./components/CartItem"


function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/cart" element={ <Cart/> }/>
      <Route path="/cartitem" element={ <CartItem/> }/>

    </Routes>
  
    </>
  )
}

export default App
