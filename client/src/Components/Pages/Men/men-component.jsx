import React, { useContext, useEffect, useState } from 'react'
import { ClothingContext } from '../../../Context/Clothing/clothing-context';
import { LoadingContext } from '../../../Context/loading/loading-context';
import { GetAllClothing } from '../../../Services/Clothing/clothing-service';
// {
//   userData.filter(user => user.userId === userFromMemory.id).map((user , index) => 
//    <tr key={index}>
//    <td className="text-left">{user.userName}</td>
//    <td className="text-left">{user.userId}</td>
//    <td className="text-left">{user.grade}</td>
//    <td className="text-left">{user.test}</td>
//    <td className="text-left">{user.course}</td>
//   </tr> 
//   )
//   }
export default function Men() {
  // let [menData, setMenData] = useState([]);
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
        clothing.filter(clothing => clothing.Gender === "Men").map((menClothing,index)  => 
        <div className="cardClothing" key={index}>
        <h2 >
          <img src={menClothing.Img} alt='imgmenClothing'/>
          <br/>
          Type : {menClothing.Type}
           <br />
          Price : {menClothing.Price}
          <br />
          Name : {menClothing.Name}
          <br />
          Long : {menClothing.Long}
          <br />
          Color : {menClothing.Color}
          <br />
          Amount : {menClothing.Amount}
          <br />
          Gender : {menClothing.Gender}
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
