import "../App.css";
import Navbar from '../components/Navbar';
// import Navbar2 from './components/Navbar2';
import Footer from "../components/Footer";
import { Grid } from '@material-ui/core';
import {Route, Link} from "react-router-dom"
import ProductList from "../components/ProductList";
import Product from "../components/Product";
import { ProductConsumer, ProductProvider } from "../components/context";
import { Details } from "@material-ui/icons";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      {/* <Navbar2 /> */}
      <hr />
      {/* <Product /> */}
      {/* <ProductList />
      <Details />
      <Product /> */}
      <Footer />
      
    </div>
  );
}

export default Home;
