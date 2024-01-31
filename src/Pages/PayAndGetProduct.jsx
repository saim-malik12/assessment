import React from "react";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

const PayAndGetProduct = () => {
  const { cartProduct } = useSelector((state) => state.cart);

  const getTotalAmount = () => {
    return cartProduct.reduce(
      (total, product) => total + product.price * product.count,
      0
    );
  };
  const handleToken = (token) => {
    console.log(token);
  };

  return (
    <div className="cart-summary">
      <div className="summary">
        <h4>Order Details:</h4>
        {cartProduct.map((product) => (
          <div
            className="container col-md-4"
            style={{ margin: "30px 20px" }}
            key={product.id}
          >
            <img
              style={{ width: "70px", height: "70px" }}
              src={product.image}
              alt=""
            />
            <div className="just-title">{product.title}</div>
            <span>Quantity: {product.count}</span>
            <div className="items-price">
              Total: {product.price * product.count}
            </div>
            <div className="stripe-section">
              <StripeCheckout
                stripeKey="pk_test_51NcidfDzGDewSXJIgk50igj0o9pZEDmQ9XUHk0VE93TGpKMza7dFxSzi5rJ1fZnkzxhVwwlYMi6vagUewXLYndjF00lAMKHcsA"
                token={handleToken}
                billingAddress
                shippingAddress
                amount={getTotalAmount() * 100}
                name="All"
              ></StripeCheckout>
            </div>
          </div>
        ))}
      </div>
      <h4>Total Amount: {getTotalAmount()}</h4>
    </div>
  );
};

export default PayAndGetProduct;
