import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const AdminSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return
    }

    try {
      const response = await axios.post("http://localhost:8081/auth/admin-signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      console.log("Admin Signup successful: ", response.data);
      navigate("/login");

    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred during admin signup");
      }
    }
  }

  return (
    <div className='auth-container'>
      <div className='auth-card'>
        <h2>Create Admin Account</h2>
        <p>Sign up to manage food items</p>
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
            <label htmlFor="email">Email</label>
            <input type="email"
              placeholder='Enter your admin email'
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

          <button type='submit' className="auth-btn">Sign Up as Admin</button>
        </form>
        <p className="auth-link">Already have an admin account? <Link to="/admin-login">Admin Login</Link></p>
        <p className="auth-link">Are you a regular user? <Link to="/signup">User Signup</Link></p>
      </div>
    </div>
  )
}

export default AdminSignup;
