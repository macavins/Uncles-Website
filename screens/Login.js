import "../App.css";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {NavLink} from "react-router-dom";



function Login(props) {
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
  <form className="login">
  <h2> Log In</h2>
  <h3> Need an account? <NavLink to="/Signup"
  className="slightlyMoreBold" style={{ textDecoration: 'none' }}
  >Sign up</NavLink></h3>
    <input type="text" placeholder="Email" />
    <input type="password" placeholder="Password" />
    {!props.isRegistered === false && (
      <input type="password" placeholder="Confirm Password" /> )}
    <button type="submit"
    style={{ backgroundColor: isMouseOver ? "grey" : "#EDF0F7" }}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      {props.userIsRegistered ? "Login" : "Login"}
    </button>
  </form>
  <Footer />
  </div>
);
}

export default Login;

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   function Form(props) {
//     return (
//       <form className="form">
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         {!props.isRegistered === false && (
//           <input type="password" placeholder="Confirm Password" /> )}
//         <button type="submit">
//           {props.userIsRegistered ? "Login" : "Register"}
//         </button>
//       </form>
//     );
//   }

//   return (
//     <div className="Login">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group size="lg" controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             autoFocus
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <button block size="lg" type="submit" disabled={!validateForm()}>
//           Login
//         </button>
//       </Form>
//     </div>
//   );
// }




// import React, { useState } from "react";

// function App() {
//   const [headingText, setHeadingText] = useState("Hello");
//   const [isMouseOver, setMouseOver] = useState(false);
//   function handleClick() {
//     setHeadingText("subtmitted");
//   }

//   function handleMouseOver() {
//     setMouseOver(true);
//   }

//   function handleMouseOut() {
//     setMouseOver(false);
//   }

//   return (
//     <div className="container">
//       <h1>{headingText}</h1>
//       <input type="text" placeholder="What's your name?" />
//       <button
//         style={{ backgroundColor: isMouseOver ? "black" : "white" }}
//         onClick={handleClick}
//         onMouseOver={handleMouseOver}
//         onMouseOut={handleMouseOut}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }

// export default App;
