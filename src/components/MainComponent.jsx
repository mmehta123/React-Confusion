import React from "react";
import { DISHES } from "../shared/dishes.js"
import Menu from "./MenuComponent";
import Dishdetailcomponent from "./DishdetailComponent";
import Contact from "./ContactComponent.js";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx"
import Home from "./HomeComponent.jsx";
import { Switch, Route, Redirect } from 'react-router-dom';
import { COMMENTS } from "../shared/comments.js"
import { LEADERS } from "../shared/leaders"
import { PROMOTIONS } from "../shared/promotions"

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            dishes: DISHES,
            selectedDish: null,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS
        }
    }

    render() {
        const HomePage = () => {
            return (
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({ match }) => {
            console.log((match.params.dishId))
            return (
                <Dishdetailcomponent dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                />

            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        )
    }
}
export default Main;