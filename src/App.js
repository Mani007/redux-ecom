import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {
  const isLoggedin = useSelector(state => state.auth.isLoggedin)
  console.log(isLoggedin)
  return (
    <div className="App">
      {!isLoggedin && <Auth />}
      {isLoggedin && <Layout />}
      {/* <Layout /> */}
    </div>
  );
}

export default App;
