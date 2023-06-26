import React, {useState} from 'react'
import "../App.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className="Navbar">
           <div className="leftSide">
           <h1 className="title"><NavLink to="/"  style={{ textDecoration: 'none', color:'#19124F' }}
           >'Logo' Clintons Cannabis </NavLink> </h1>
           </div>
           {/* <NavLink to="/Signup"
  className="slightlyMoreBold" style={{ textDecoration: 'none' }}
  >Sign up</NavLink></h3> */}

           <div className="midSide">
           <input type="text" placeholder="Search..." />
           <button><SearchIcon/></button>
           </div>


           <div className="rightSide">
           <div className="links" id={showLinks ? "hidden" : ""}>
           <Link to="/Login" >Login</Link>
           <a href="/Signup">Signup</a>
           <a href="/WishList"><FavoriteIcon /></a>
           <a href="/cart"><ShoppingCart/></a>
           {/* <button onClick={() => setShowLinks(!showLinks)}>
           <ReorderIcon/> </button> */}
           </div>

           </div>

        </div>


    )
}

export default Navbar
