import React from 'react'
import { Link } from 'react-router-dom'
import './home.css';
export default function Home() {
  return (
    <div className='Home'>
      {/* <img src='https://media.istockphoto.com/photos/flat-lay-with-womans-clothes-and-accessories-picture-id1339264709?b=1&k=20&m=1339264709&s=170667a&w=0&h=qzBCqQvXpk-eLH8e72ZRaWRPuvWFwcUKZqGr1IsyTlE='
      alt='picClothing' width="1500px" height="500px"/> */}

<Link to="/clothing">Men  </Link>
<Link to="/clothing">  Women</Link>



    </div>
  )
}
