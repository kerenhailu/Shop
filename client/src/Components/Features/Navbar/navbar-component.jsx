import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css';
export default function Navbar() {
  return (
    <div className='Navbar'>
      <Link to="/">Home</Link>
      <Link to="/clothing">Clothing</Link>
      <Link to="/cart">Cart</Link>
    </div>
  )
}
