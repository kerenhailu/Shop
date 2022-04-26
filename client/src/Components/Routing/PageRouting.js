import React  from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Features/Footer/footer-component";
import Navbar from "../Features/Navbar/navbar-component";
import Home from "../Pages/Home/home-component";


const PageRouting = () => {
  
  return (
    <div> 
      <BrowserRouter>
      <Navbar/> 
        <Routes>
          <Route exact path="/" element={<Home/>}/>
         
        </Routes>
         <Footer/> 
      </BrowserRouter>
     </div> 
  );
};
export default PageRouting;
