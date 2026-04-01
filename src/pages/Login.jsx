import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

   const [formData, setFormData] = useState({
      email:'',
      password:'',
    })

      const navigate = useNavigate();

    const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    console.log('Login attemt:', formData);
    navigate('/')
  }

  return (
    <div className='auth-container'>
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p>Login to your account to continue</p>

        <form className='auth-form' onSubmit={handleSubmit}>


            <div className='form-group'>

            <label htmlFor="name">Email</label>

            <input type="email" 
            placeholder='Enter your email' 
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required />

             </div>

             <div className='form-group'>
            <label htmlFor="password">Password</label>
            <input type="password" 
            placeholder='Enter your password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
             />
              </div>
              
                <Link to = "/home">
                <button className="auth-btn">Login</button>
                </Link> 
                
        </form>
        <p className="auth-link">Don't have an account ? 
          <Link to = "/signup">Sign Up</Link>

        </p>
      </div>
    </div>
  )
}

export default Login

// <p>Already have an account ? <Link to="/login">Login</Link></p>