import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { remove, increment, decrement } from "../store/CartSlice";
import { useNavigate } from "react-router";

const Cart = () => {
  const navigate=useNavigate();

  const dispatch = useDispatch();

  const [logn ,setLogn]=useState('')

  const { cartProduct } = useSelector((state) => state.cart);
  console.log(cartProduct);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  const handleIncrease = (productId) => {
    const existingItem = cartProduct.find((item) => item.id === productId);
    if (existingItem) {
      // If the item already exists in the cart, just increment its count
      dispatch(increment(productId));
    } else {
      // If the item is not in the cart, add it with count = 1
      dispatch(add({ id: productId, count: 1 }));
    }
  };

  const handleDecrease = (productId) => {
    const existingItem = cartProduct.find((item) => item.id === productId);
    if (existingItem) {
      dispatch(decrement(productId));
    }

  };

  const getTotalAmount = () => {
    return cartProduct.reduce((total, product) => total + product.price * product.count, 0);
  };

  useEffect(()=>{
   
  },[])

  const handlePlaceOrder = () => {
    if(!localStorage.getItem('token')){
      navigate('/signin')
    }
    else{
      navigate('/cart/payandgetproduct')
    }
   }

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
  {cartProduct?.map((product) => (
    <div className="cartCard" key={product.id}>
      <img className="productImage" src={product.image} alt="" />
      <h5 className="productTitle">{product.title}</h5>
      <div className="productPriceWrapper">
        <span className="productPrice">${product.price * product.count}</span>
        <div className="productQuantity">
          <button className="quantityBtn" onClick={() => handleDecrease(product.id)}>-</button>
          <span className="quantity">{product.count}</span>
          <button className="quantityBtn" onClick={() => handleIncrease(product.id)}>+</button>
        </div>
      </div>
      <button onClick={() => handleRemove(product.id)} className="removeBtn">
        Remove
      </button>
    </div>
  ))}
  <div className="checkoutWrapper">
    <button onClick={handlePlaceOrder} className="placeOrderBtn">Place Order</button>
    <h4 className="totalAmount">Total Amount: ${getTotalAmount()}</h4>
  </div>
</div>

    </div>
  );
};

export default Cart;
