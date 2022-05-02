import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/clothing">Clothing</Link>
      <Link to="/cart">Cart</Link>
    </div>
  )
}
