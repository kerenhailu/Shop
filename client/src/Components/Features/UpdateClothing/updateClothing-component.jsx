import React, { useContext, useState } from 'react'
import { ClothingContext } from '../../../Context/Clothing/clothing-context';
import { PutClothing } from '../../../Services/Clothing/clothing-service';

export default function UpdateClothing() {
  let [userToUpdate, setUserToUpdate] = useState({});
  let { clothing, setClothing } = useContext(ClothingContext);

const updateUser = (requestedGrade, newGrade) => {
  // setLoading(true);
  setUserToUpdate({ ...userToUpdate });
  console.log({ requestedGrade, newGrade });
  PutClothing({ requestedGrade, newGrade })
    .then((res) => res.json())
    .then((data) => setClothing(data))
    .catch((err) => console.log(err))
    // .finally(() => setLoading(false));
};
const updateValue = (e) => {
  clothing[e.target.name] = e.target.value;
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
<button type="submit" onClick={updateUser} >Add </button>
 </div> 
 </div>
)

}
