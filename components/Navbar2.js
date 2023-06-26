import React, {useState} from 'react'
import '../App.css';
// import ReorderIcon  from "@material-ui/icons/Reorder";
// import SearchIcon from "@material-ui/icons/Search";
// import ShoppingCart from "@material-ui/icons/ShoppingCart";
// import FavoriteIcon from '@material-ui/icons/Favorite';

function Navbar2() {
    const [showLinks, setShowLinks] = useState(false);

    return (
        
        <div className="Navbar2"> 
           <a href="/phoneChargers">Phone Chargers</a>
           <a href="/cases">Cases</a>
           <a href="/accessories">Accessories</a>
           {/* <button onClick={() => setShowLinks(!showLinks)}> 
           <ReorderIcon/> </button> */}
           
           </div>
        
    )
}

export default Navbar2
