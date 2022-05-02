import React, { useContext, useState } from 'react'
import { ClothingContext } from '../../../Context/Clothing/clothing-context';
import { LoadingContext } from '../../../Context/loading/loading-context';
import { PostClothing } from '../../../Services/Clothing/clothing-service';

export default function AddClothing() {
let[newClothing,setNewClothing]=useState({});

  const addClothing = (e) => {
    e.preventDefault();
    setNewClothing({...newClothing})
    PostClothing(newClothing);
    console.log(newClothing);
  }
  const updateValue = (e) => {
    newClothing[e.target.name] = e.target.value;
  };
  return (
    <div>
      <div className='addClothing'>
      <h1>Add</h1>
<label>Type</label><br/>
<input type="string" name='Type' placeholder="Enter the type" onChange={updateValue} required/><br/>
<label>Gender</label><br/>
<input type="string" name='Gender' placeholder="Enter the Men or Women" onChange={updateValue}required/><br/>
<label>Name</label><br/>
<input type="string" name='Name' placeholder="Enter the name" onChange={updateValue}required/><br/>
<label>Long</label><br/>
<input type="boolean" name='Long' placeholder="Enter true or false" onChange={updateValue}required/><br/>
<label>Color</label><br/>
<input type="string" name='Color' placeholder="Enter the color" onChange={updateValue}required/><br/>
<label>Amount</label><br/>
<input type="number" name='Amount' placeholder="Enter the amount" onChange={updateValue}required/><br/>
<label>Price</label><br/>
<input type="number" name='Price' placeholder="Enter the price" onChange={updateValue}required/><br/>
<label>Img</label><br/>
<input type="string" name='Img' placeholder="Enter the img" onChange={updateValue} required/><br/>
<button type="submit" onClick={addClothing} >Add </button>
   </div> 
   </div>
  )
}
