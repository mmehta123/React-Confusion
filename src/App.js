import logo from "./logo.svg";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dishes"
import { Component } from "react";

class App extends Component {
  constructor(){
    super();
    this.state={
      dishes:DISHES
    };
  }
  render() {

    return (
      <div className="App">
        <Navbar dark color="primary ">
          <div className="container">
            <NavbarBrand href="#">Restaurant Delicious</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
