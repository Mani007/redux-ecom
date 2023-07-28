import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./Cartitems";
import { useSelector } from "react-redux";
const Layout = () => {
  let total = 100;
  //const totalPrice = useSelector((state) => state.cart.totalPrice)
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        <CartItems/>
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;