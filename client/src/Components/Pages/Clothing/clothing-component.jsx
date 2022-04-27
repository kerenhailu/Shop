import React, { useContext, useEffect } from 'react'
import { ClothingContext } from '../../../Context/Clothing/clothing-context';
import { GetAllClothing } from '../../../Services/Clothing/clothing-service';

export default function Clothing() {
  let {clothing,setClothing}=useContext(ClothingContext);


  useEffect(()=>{
    GetAllClothing()
    .then((data) => {
      setClothing(data);
    })
    .catch(err => console.log(err))
  },[])
  return (
    <div>Clothing
{clothing.Type}

    </div>
  )
}
