import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='auth-container'>
      <div className='auth-card'>
        <h2>Create Account</h2>
        <p>Sign up to get started</p>
        <form className='auth-form'>
          <div className='form-group'>
            <label htmlFor="name">Full Name</label>
            <input type="text" placeholder='Enter your full name' />
            <label htmlFor="name">Email</label>
            <input type="email" placeholder='Enter your email' />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Create your password' />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" placeholder='Confirm your password' />
          </div>
          <button type='submit'>Sign Up</button>
        </form>

        <p>Already have an account ? <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}

export default Signup
//  https://teams.microsoft.com/meet/4669012942578?p=zHocWlzpRMtgq0ntYk
