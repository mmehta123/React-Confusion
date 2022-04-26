import logo from "./logo.svg";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dishes"
import { Component } from "react";

class App extends Component {
  render() {

    return (
      <div className="App">
        <Navbar dark color="primary ">
          <div className="container">
            <NavbarBrand href="#">Restaurant Delicious</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;
