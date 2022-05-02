import React from 'react'
import { Link } from 'react-router-dom'

export default function ClothingChanges() {
  return (
    <div>ClothingChanges
<Link to="/addClothing"><button>Add Clothing</button></Link>
<Link to="/deleteClothing">Delete Clothing</Link>
<Link to="/updateClothing"><button>Update Clothing</button></Link>
    </div>
  )
}
