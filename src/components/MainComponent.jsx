import React from "react";
import Menu from "./MenuComponent";
import Dishdetailcomponent from "./DishdetailComponent";
import Contact from "./ContactComponent.js";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx"
import Home from "./HomeComponent.jsx";
import About from "./AboutUs.jsx";
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import { connect } from "react-redux";

const mapStateToProps=state=>{
    return{
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}
class Main extends React.Component {
    constructor() {
        super();
        
    }

    render() {
        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({ match }) => {
            console.log((match.params.dishId))
            const TempId = parseInt(match.params.dishId, 10)
            return (
                <Dishdetailcomponent dish={this.props.dishes.filter((dish) => dish.id === TempId)[0]}
                    comment={this.props.comments.filter((comment) => comment.dishId === TempId)}
                />

            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders.filter((leader) => leader.id >= 0)} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        )
    }
}
export default withRouter(connect(mapStateToProps)(Main));