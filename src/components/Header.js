import React from "react";
import Cart from "./Cart";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";

const Header = () => {
  
  const dispatch = useDispatch();
  const logouthandler =(event) => {
    event.preventDefault()  //Preventing default rerendering
    dispatch(authActions.logout())  //dispatch funcion activated
  }
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Ecomm App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li>
            <button className="logout-btn" onClick={logouthandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;