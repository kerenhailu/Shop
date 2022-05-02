import React  from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Features/Footer/footer-component";
import Navbar from "../Features/Navbar/navbar-component";
import Home from "../Pages/Home/home-component";
import Clothing from "../Pages/Clothing/clothing-component";
import Cart from "../Pages/ShoppingCart/cart-component";
import Women from "../Pages/Women/women-component";
import Men from "../Pages/Men/men-component";
import Accessories from "../Pages/Accessories/accessories-component";
import AddClothing from "../Features/AddClothing/addClothing-component";
import DeleteClothing from "../Features/DeleteClothing/deleteClothing-component";
import UpdateClothing from "../Features/UpdateClothing/updateClothing-component";
import ClothingChanges from "../Pages/ClothingChanges/clothingChanges-component";
// import * as ReactDOM from 'react-dom/client';

const PageRouting = () => {
  
  return (
    <div> 
      <BrowserRouter>
      <Navbar/> 
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/clothing" element={<Clothing/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/women" element={<Women/>}/>
          <Route exact path="/men" element={<Men/>}/>
          <Route exact path="/accessories" element={<Accessories/>}/>
          <Route exact path="/clothingChanges" element={<ClothingChanges/>}/>
          <Route exact path="/addClothing" element={<AddClothing/>}/>
          <Route exact path="/deleteClothing" element={<DeleteClothing/>}/>
          <Route exact path="/updateClothing" element={<UpdateClothing/>}/>
         
        </Routes>
         <Footer/> 
      </BrowserRouter>
     </div> 
  );
};
export default PageRouting;
