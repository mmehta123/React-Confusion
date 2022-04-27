import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "../shared/dishes.js"
import Menu from "./MenuComponent";
import Dishdetailcomponent from "./DishdetailComponent";

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    cardClicked(dishId) {
        console.log(dishId)
        this.setState({ selectedDish: dishId })
    }

    render() {
        return (
            <div className="App">
                <Navbar dark color="primary ">
                    <div className="container">
                        <NavbarBrand href="#">Restaurant Delicious</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.cardClicked(dishId)} />
                {this.state.selectedDish != null ? <Dishdetailcomponent dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> : ""}
            </div>
        )
    }
}
export default Main;