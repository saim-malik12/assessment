import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Products from "./Products";
import { useDispatch } from "react-redux";
//import { signOut } from "../store/product";



const Navbar = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
 
  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate('/cart') // Remove token from local storage
  };
  const items = useSelector((state) => {
    return state.cart;
  });
  return (
    <div
      className="head"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
     <span className="fw-bold text-white">Ecommerce</span>
      <div>
    
        
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/products">
          Products
        </Link>
        <Link className="navLink" to="/Electronics">
          Electronics
        </Link>
        <Link className="navLink" to="/Menfashion">
         Men Fashion
        </Link>
        <Link className="navLink" to="/Womenfashion">
        Women Fashion
        </Link>
        <Link className="navLink" to="/Jwellery">
        Jwellery
        </Link>
        <Link className="navLink" to="/cart">
          <i class="cartCount fa-solid fa-cart-shopping">{items.length}</i>
        </Link>
        <Link className="navLink" to="/cart/payandgetproduct">
          Buy And Pay
        </Link>
         
      </div>
    </div>
  );
};

export default Navbar;
