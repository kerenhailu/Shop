import React, { useContext, useEffect } from "react";
import { ClothingContext } from "../../../Context/Clothing/clothing-context";
import { LoadingContext } from "../../../Context/loading/loading-context";
import { GetAllClothing } from "../../../Services/Clothing/clothing-service";

export default function Cart() {
  let { clothing, setClothing } = useContext(ClothingContext);
  let { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);
    GetAllClothing()
      .then((data) => {
        setClothing(...data);
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
      Cart
      <table>
        <tr>
          <th>Type</th>
          <th>Price</th>
          <th>Name</th>
          <th>Long</th>
          <th>Color</th>
          <th>Amount</th>
        </tr>
        <tr>
          <td>{clothing.Type} </td>
          <td>{clothing.Price}</td>
          <td>{clothing.Name}</td>
          <td>{clothing.Long}</td>
          <td>{clothing.Color}</td>
          <td>{clothing.Amount}</td>
        </tr>
      </table>
    </div>
     }</>
  );
  
}

