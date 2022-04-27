import React, { useContext, useEffect } from 'react'
import { ClothingContext } from '../../../Context/Clothing/clothing-context';
import { LoadingContext } from '../../../Context/loading/loading-context';
import { GetAllClothing } from '../../../Services/Clothing/clothing-service';

export default function Clothing() {
  let {clothing,setClothing}=useContext(ClothingContext);
  let {loading,setLoading}=useContext(LoadingContext);


  useEffect(()=>{
    setLoading(true);
    GetAllClothing()
    .then((data) => {
      setClothing(data);
    })
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  },[])
  console.log(clothing);
  console.log(loading);
  return (
    <div>Clothing
      <h2>
        Type : {clothing.Type} <br/>
        Price : {clothing.Price}<br/>
        Name : {clothing.Name}<br/>
        Long : {clothing.Long}<br/>
        Color : {clothing.Color}<br/>
        Amount : {clothing.Amount}<br/>

      </h2>


    </div>
  )
}
