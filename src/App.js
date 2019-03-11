import React, { Component, Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <ProductList />
        <Details />
        <Cart />
        <Default />
      </Fragment>
    );
  }
}

export default App;
