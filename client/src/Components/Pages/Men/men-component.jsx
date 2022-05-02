import React, { useContext, useEffect } from 'react'
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
      {loading ? (
        <img
          className="gifLoading"
          src="https://cdn.dribbble.com/users/46511/screenshots/1756041/loader-spinning.gif"
          alt="gifLoading"
        />
      ) : (
        <div className="ClothingComp">
          {
        clothing.filter(costume => costume.Gender === "Men").map((costume , index) => 
        <div className="cardClothing" key={index}>
        <h2 >
          Type : {costume.Type} <br />
          Price : {costume.Price}
          <br />
          Name : {costume.Name}
          <br />
          Long : {costume.Long}
          <br />
          Color : {costume.Color}
          <br />
          Amount : {costume.Amount}
          Gender : {costume.Gender}
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
