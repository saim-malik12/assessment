
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import Store from "./store/Store";
import Products from "./components/Products";

import { useState } from "react";
import PayAndGetProduct from "./Pages/PayAndGetProduct";
import Electronics from "./Pages/Electronics";
import Menfashion from "./Pages/Menfashion";
import Womenfashion from "./Pages/Womenfashion";
import Jwellery from "./Pages/Jwellery";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  
  return (
    <>
    <Provider store={Store}>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        
          <Route path="/" element={<Home/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/Electronics" element={<Electronics/>}></Route>
          <Route path="/Menfashion" element={<Menfashion/>}></Route>
          <Route path="/Womenfashion" element={<Womenfashion/>}></Route>
          <Route path="/Jwellery" element={<Jwellery/>}></Route>
          
          <Route path="/cart/*" element={<Cart />}>
            <Route path="payandgetproduct" element={<PayAndGetProduct />} />
          </Route>
    
        </Routes>

      </BrowserRouter>
      </Provider>

     
    </>
  );
}

export default App;
