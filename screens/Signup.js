// import React, {useState} from "react";
import "../App.css";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import Login from './Login';
import {NavLink} from "react-router-dom";



function Signup(props) {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);
function handleClick() {
  setHeadingText("subtmitted");
}

function handleMouseOver() {
  setMouseOver(true);
}

function handleMouseOut() {
  setMouseOver(false);
}
return (
  <div> 
  <Navbar />
  <hr/>
  <form className="signup">
  <h2>Join us</h2>
  <h3>Already have an account? <NavLink to="/Login" 
  className="slightlyMoreBold" style={{ textDecoration: 'none' }}>
  Log in</NavLink></h3>
    <input type="text" placeholder="Email" />
    <input type="password" placeholder="Password" />
    {!props.isRegistered === false && (
      <input type="password" placeholder="Confirm Password" /> )}
    <button type="submit"
    style={{ backgroundColor: isMouseOver ? "grey" : "#EDF0F7" }}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      {props.userIsRegistered ? "Login" : "Register"}
    </button>
  </form>
  <Footer />
  </div>
);
}

export default Signup;