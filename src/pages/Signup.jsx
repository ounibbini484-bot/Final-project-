import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  const navigate = useNavigate();

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return
    }

    console.log('Signup attemt:', formData);
    navigate('/login')
  }


  return (
    <div className='auth-container'>
      <div className='auth-card'>
        <h2>Create Account</h2>
        <p>Sign up to get started</p>
        <form className='auth-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor="name">Full Name</label>

            <input type="text" 
            placeholder='Enter your full name'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required />

            </div>

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
            placeholder='Create your password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
             />
              </div>

              <div className='form-group'>

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password"
            placeholder='Confirm your password'
            id='confirmPassword'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            required
             />
          </div>
          <Link to = "/login">
                          <button className="auth-btn">Sign Up</button>
                          </Link> 
        </form>

        <p className="auth-link">Already have an account ? <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}

export default Signup
//  https://teams.microsoft.com/meet/4669012942578?p=zHocWlzpRMtgq0ntYk
