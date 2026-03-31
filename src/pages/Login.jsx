import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>Login
       <p> Do not have a acont  ? Create one now  <Link to="/signup">Signup </Link></p>
    </div>
  )
}

export default Login

// <p>Already have an account ? <Link to="/login">Login</Link></p>