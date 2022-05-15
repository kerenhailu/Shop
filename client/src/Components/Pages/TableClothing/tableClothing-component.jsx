import React, { useContext, useEffect } from "react";
import { ClothingContext } from "../../../Context/Clothing/clothing-context";
import { LoadingContext } from "../../../Context/loading/loading-context";
import { GetAllClothing } from "../../../Services/Clothing/clothing-service";
import './tableClothing.css';
export default function TableClothing() {
  let { clothing, setClothing } = useContext(ClothingContext);
  let { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);
    GetAllClothing()
      .then((data) => {
        setClothing(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  console.log(clothing);
  console.log(loading);
  return (
      <>
      {
        loading ? <img className='gifLoading' src='https://cdn.dribbble.com/users/46511/screenshots/1756041/loader-spinning.gif' alt='gifLoading' /> :
    <div>
     <h1>TableClothing</h1>     
      <table >
        <tr>
          <th>Type</th>
          <th>Price</th>
          <th>Name</th>
          <th>Long</th>
          <th>Color</th>
          <th>Amount</th>
          <th>Img</th>
        </tr> 
        {
        clothing.map((costume,index)  =>
        <tr key={index}>
          <td>{costume.Type} </td>
          <td>{costume.Price}</td>
          <td>{costume.Name}</td>
          <td>{costume.Long}</td>
          <td>{costume.Color}</td>
          <td>{costume.Amount}</td>
          <td><img src={costume.Img}/></td>
        </tr>
        )}
      </table>

    </div>
     }</>
  );
  
}

