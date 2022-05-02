// import res from 'express/lib/response';
import React, { useContext, useEffect } from "react";
import { ClothingContext } from "../../../Context/Clothing/clothing-context";
import { LoadingContext } from "../../../Context/loading/loading-context";
import { GetAllClothing } from "../../../Services/Clothing/clothing-service";
import "./clothing.css";

export default function Clothing() {
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
            <h3>
            <img src={costume.Img} alt='imgCostume'/>
          <br/>
               Name : {costume.Name}
              <br />
              Type : {costume.Type}
               <br />
              Long : {costume.Long}
              <br />
              Color : {costume.Color}
              <br />
              Amount : {costume.Amount}
              <br />
              Gender : {costume.Gender}
               <br />
               Price : {costume.Price}
              <br />
              <button>Buy</button>
            </h3>
          </div>
        )} </div>
      )}
    </>
  );
}
