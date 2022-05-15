// import res from 'express/lib/response';
import React, { useContext, useEffect, useState } from "react";
import { ClothingContext } from "../../../Context/Clothing/clothing-context";
import { LoadingContext } from "../../../Context/loading/loading-context";
import { PostCart } from "../../../Services/Cart/cart-service";
import { DeleteClothing, GetAllClothing } from "../../../Services/Clothing/clothing-service";
import "./clothing.css";
// !delete button dont work
export default function Clothing() {
  let { clothing, setClothing } = useContext(ClothingContext);
  let { loading, setLoading } = useContext(LoadingContext);
  let [clothingToDelete,setClothingToDelete] = useState({});
  let [clothingToCart,setClothingToCart] = useState({});


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


  const addClothingToCart = (e,clothingToCart) => {
    e.preventDefault();
    setClothingToCart({...clothingToCart})
    PostCart(clothingToCart);
    console.log(clothingToCart);
    // setOpen(!open);
  }
  const deleteClothing = (clothingToDeletea) => {
    setLoading(true);
    DeleteClothing(clothingToDeletea)
      .then((res) => res.json())
      .then((data) => setClothing(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    console.log(clothingToDelete);
  };
  const updateValue = (e) => {
    setClothingToDelete[e.target.name] = e.target.value;
    console.log(clothingToDelete);
  
  };
  return (
    <>
      {loading ? (
        <img
          className="gifLoading"
          src="https://cdn.dribbble.com/users/46511/screenshots/1756041/loader-spinning.gif"
          alt="gifLoading"
        />
      ) : (
        <div className="ClothingComp">
          <br />
          {
            clothing.map((costume,index)  =>
           
          <div className="cardClothing" key={index}>
           <button onClick={()=>deleteClothing(costume)}>Delete</button>
           <br/>
            <img src={costume.Img} alt='imgCostume'/>
          <br/>
          <p onChange={updateValue}>Name : {costume.Name}</p>
          <p onChange={updateValue}>Type : {costume.Type}</p>
          <p onChange={updateValue}>Long : {costume.Long}</p>
          <p onChange={updateValue}>Color : {costume.Color}</p>
          <p onChange={updateValue}>Amount : {costume.Amount}</p>
          <p onChange={updateValue}>Gender : {costume.Gender}</p>
          <p onChange={updateValue}>Price : {costume.Price}</p>
              <button onClick={addClothingToCart}>Buy</button>
            
          </div>
        )} </div>
      )}
    </>
  );
}
