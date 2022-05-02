import React, { useContext, useState } from 'react'
import { ClothingContext } from '../../../Context/Clothing/clothing-context';
import { LoadingContext } from '../../../Context/loading/loading-context';
import { PostClothing } from '../../../Services/Clothing/clothing-service';

export default function AddClothing() {
  let { loading, setLoading } = useContext(LoadingContext);
  let { clothing, setClothing } = useContext(ClothingContext);
  let [clothingUpdate, setClothingUpdate] = useState({});

let[newClothing,setNewClothing]=useState({});

  // const addClothing = () => {
  //   setLoading(true);
  //   setClothingUpdate({ ...clothingUpdate});
  //   console.log(clothingUpdate);
  //   PostClothing(clothingUpdate)
  //     .then((res) => res.json())
  //     .then((data) => setClothing(data))
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  //     console.log(clothing);
  // };



  // let[admin , setAdmin] = useState({isAdmin : true});

  // const getValues = (e) => {
  //   admin[e.target.name] = e.target.value ;
  // }
  // const addAdmin = (e) => {
  //   e.preventDefault();
  //   setAdmin({...admin})
  //   userRegister(admin);
  // }
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
      <h1>Add</h1>
<label>Type</label><br/>
<input type="string" name='Type' placeholder="Enter the type" onChange={updateValue}/><br/>
<label>Price</label><br/>
<input type="number" name='Price' placeholder="Enter the price" onChange={updateValue}/><br/>
<label>Name</label><br/>
<input type="string" name='Name' placeholder="Enter the name" onChange={updateValue}/><br/>
<label>Long</label><br/>
<input type="boolean" name='Long' placeholder="Enter true or false" onChange={updateValue}/><br/>
<label>Color</label><br/>
<input type="string" name='Color' placeholder="Enter the color" onChange={updateValue}/><br/>
<label>Amount</label><br/>
<input type="number" name='Amount' placeholder="Enter the amount" onChange={updateValue}/><br/>
<label>Img</label><br/>
<input type="string" name='Img' placeholder="Enter the img" onChange={updateValue}/><br/>
<button type="submit" onClick={addClothing} >Add </button>
    </div>
  )
}
