import React from 'react'
import { Link } from 'react-router-dom'
import './clothingChanges.css';
export default function ClothingChanges() {
  return (
    <div className='ClothingChanges'><h1>Clothing Changes</h1>
<Link to="/addClothing"><button>Add Clothing</button></Link>
<Link to="/deleteClothing"><button>Delete Clothing</button></Link>
<Link to="/updateClothing"><button>Update Clothing</button></Link>
    </div>
  )
}
