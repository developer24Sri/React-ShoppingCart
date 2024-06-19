import React from "react";
import "../Styles/Headerstyle.css";
import logo from "../images/shopping-cart-logo.png";

export default function CardHeader(props) {
  return (
    <>
    <header className="card-header">
    <h1 className="header-logo">
        <img src={logo} alt="Logo" />
      </h1>
      <h1 className="heading">REACT SHOPPING-CART</h1>
      <div className="nav-links">
        <a href="/" className="nav-link">Home</a>
        <a href="/about" className="nav-link">About</a>
        <div className="cart-icon-wrapper" onClick={() => { props.popupStatus(1) }} style={{ cursor: "pointer" }}>
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-count">{props.headerCount}</span>
      </div>
      </div>
    </header>
    </>
  );
}



//Hear we are sending the popupStatus 1 when the user clicks the cart icon i.e initially it was 0 now by clicking the cart in card.js, it becomes 1
//Hear we are reciving the headercount value 1 through props which camed from app.js 