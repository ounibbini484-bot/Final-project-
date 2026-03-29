import Home from "./pages/Home"
import Navbar  from "./components/Navbar"
import { Routes,Route } from 'react-router-dom'
import Cart from "./pages/Cart"
import CartItem from "./components/CartItem"
import Checkout from "./pages/Checkout"
import Chatbot from "./pages/Chatbot"
import Login from "./pages/Login"
import Signup from "./pages/Signup"


function App() {
 

  return (
    <>
    <Navbar/>
   
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/cart" element={ <Cart/> }/>
      <Route path="/cartitem" element={ <CartItem/> }/>
      <Route path="/checkout" element={ <Checkout/> }/>
      <Route path="/login" element={ <Login/> }/>
      <Route path="/signup" element={ <Signup/> }/>




    </Routes>
     <Chatbot/>
  
    </>
  )
}

export default App
