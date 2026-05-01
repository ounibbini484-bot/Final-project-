import Home from "./pages/Home"
import Navbar  from "./components/Navbar"
import { Routes,Route, Navigate } from 'react-router-dom'
import Cart from "./pages/Cart"
import CartItem from "./components/CartItem"
import Checkout from "./pages/Checkout"
import Chatbot from "./pages/Chatbot"
import Login from "./pages/Login"
import Signup from "./pages/Signup"


import AdminSignup from "./pages/AdminSignup"
import AdminLogin from "./pages/AdminLogin"
import AddFood from "./pages/AddFood"

function App() {
 

  return (
    <>
    <Navbar/>
   
    <Routes>
      <Route path="/" element={<Navigate to = "/login"/>}/>
      <Route path="/home" element={ <Home/> }/>
      <Route path="/cart" element={ <Cart/> }/>
      <Route path="/cartitem" element={ <CartItem/> }/>
      <Route path="/checkout" element={ <Checkout/> }/>
      <Route path="/login" element={ <Login/> }/>
      <Route path="/signup" element={ <Signup/> }/>
      <Route path="/admin-login" element={ <AdminLogin/> }/>
      <Route path="/admin-signup" element={ <AdminSignup/> }/>
      <Route path="/add-food" element={ <AddFood/> }/>

    </Routes>
     <Chatbot/>
  
    </>
  )
}

export default App
