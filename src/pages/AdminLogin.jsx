import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const AdminLogin = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/auth/login', {
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200) {
        console.log('Admin Login successful:', response.data);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', 'admin');
        navigate('/home');
      }
      else {
        console.log('Admin Login failed');
        alert('Some problem: ' + response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert('An error occurred during admin login');
      }
    }
  }

  return (
    <div className='auth-container'>
      <div className="auth-card">
        <h2>Admin Login</h2>
        <p>Login to your admin account to manage food</p>

        <form className='auth-form' onSubmit={handleSubmit}>

          <div className='form-group'>
            <label htmlFor="name">Email</label>
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
              placeholder='Enter your password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type='submit' className="auth-btn">Login as Admin</button>

        </form>
        <p className="auth-link">Don't have an admin account?
          <Link to="/admin-signup"> Sign Up</Link>
        </p>
        <p className="auth-link">Are you a regular user?
          <Link to="/login"> User Login</Link>
        </p>
      </div>
    </div>
  )
}

export default AdminLogin
