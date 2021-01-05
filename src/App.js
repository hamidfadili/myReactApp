import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import UserSpace from "./components/UserSpace";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/user" component={UserSpace} />
            <Route path="/cart" component={Cart} />
            <Route path="/" render={() => <ProductList products={[]} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
