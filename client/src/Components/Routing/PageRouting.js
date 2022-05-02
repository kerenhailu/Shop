import React  from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Features/Footer/footer-component";
import Navbar from "../Features/Navbar/navbar-component";
import Home from "../Pages/Home/home-component";
import Clothing from "../Pages/Clothing/clothing-component";
import Cart from "../Pages/ShoppingCart/cart-component";
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
         
        </Routes>
         <Footer/> 
      </BrowserRouter>
     </div> 
  );
};
export default PageRouting;
