import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import UserData from "./components/UserData";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import UserContext from "./contexts/UserContext";
import { Route, Router, Switch } from "react-router-dom";

class App extends Component {
  state = {
    user: {
      firstName: "Hamid",
      lastName: "FADILI",
      email: "hamid@fadili.com",
      password: "123456",
      cart: [],
    },
    products: [
      { title: "First product", price: 25.99 },
      { title: "Second product", price: 80.99 },
      { title: "Third product", price: 19.59 },
      { title: "Fourth product", price: 2.5 },
      { title: "Fifth product", price: 20.99 },
    ],
  };

  handleUserChange = (user) => this.setState({ user });

  render() {
    return (
      <UserContext.Provider
        value={{ user: this.state.user, onChange: this.handleUserChange }}
      >
        <div className="App">
          <NavBar user={this.state.user} />
          <div className="container">
            <Switch>
              <Route path="/profile" component={UserData} />
              <Route path="/cart" component={Cart} />
              <Route
                path="/"
                render={() => <ProductList products={this.state.products} />}
              />
            </Switch>
          </div>
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
