import './App.css';
import Navbar from './components/Navbar';
// import Navbar2 from './components/Navbar2';
import Footer from './components/Footer';
import { Grid } from '@material-ui/core';
import {Route, Link} from "react-router-dom"
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Details from './components/Details';
import Default from './components/Default';
import WishList from './components/WishList';



function App() {
  return (
    <div className="App">
    <Route exact to path="/" component={Home} />
    <Route exact to path="/Login" component={Login} />
    <Route exact to path="/Signup" component={Signup} />
    <Route exact to path="/Cart" component={Cart} />
    <Route exact to path="/WishList" component={WishList} />
    <Route component={Default}> </Route>
    </div>
  );
}

export default App;
