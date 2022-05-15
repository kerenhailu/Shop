import React, { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../../../Context/loading/loading-context";
import { GetAllCart } from "../../../Services/Cart/cart-service";

export default function Cart() {
    let [cart,setCart]=useState([{}])
  let { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);
    GetAllCart()
      .then((data) => {
        setCart(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  console.log(cart);
  console.log(loading);
  return (
      <>
      {
        loading ? <img className='gifLoading' src='https://cdn.dribbble.com/users/46511/screenshots/1756041/loader-spinning.gif' alt='gifLoading' /> :
    <div>
     <h1>Cart</h1>     
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
        cart.map((costume,index)  =>
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

