import React from "react";
import { DISHES } from "../shared/dishes.js"
import Menu from "./MenuComponent";
import Dishdetailcomponent from "./DishdetailComponent";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx"

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
            <div>
                <Header />
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.cardClicked(dishId)}/>
                {this.state.selectedDish != null ? <Dishdetailcomponent dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> : ""}
                <Footer />
            </div>
        )
    }
}
export default Main;