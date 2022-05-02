import React, { useContext, useEffect } from 'react'
import { ClothingContext } from '../../../Context/Clothing/clothing-context';
import { LoadingContext } from '../../../Context/loading/loading-context';
import { GetAllClothing } from '../../../Services/Clothing/clothing-service';
export default function Women() {
  let { clothing, setClothing } = useContext(ClothingContext);
  let { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);
    GetAllClothing()
      .then((data) => {
          setClothing(data);
          console.log(data); 
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  console.log(clothing);
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
          {
        clothing.filter(clothing => clothing.Gender === "Women").map((womenClothing,index)  => 
        <div className="cardClothing" key={index}>
        <h2 >
          <img src={womenClothing.Img} alt='imgwomenClothing'/>
          <br/>
          Type : {womenClothing.Type}
           <br />
          Price : {womenClothing.Price}
          <br />
          Name : {womenClothing.Name}
          <br />
          Long : {womenClothing.Long}
          <br />
          Color : {womenClothing.Color}
          <br />
          Amount : {womenClothing.Amount}
          <br />
          Gender : {womenClothing.Gender}
          <br />
          <button>Buy</button>
        </h2>
      </div>
        )}
        </div> 
        
      )}
    </>
  );
}
