import { Component } from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import Dishdetailcomponent from "./DishdetailComponent";

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            SelectedDish: null
        };
    }
    cardClicked(dish) {
        console.log("card clicked with dish " + dish.name);
        this.setState({ SelectedDish: dish })
    }
    renderDish(dish) {
        if (dish != null) {
            return (
                <Dishdetailcomponent Dish={this.state.SelectedDish} />
            );
        }
        else {
            return (
                <div> </div>
            );
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12  col-md-5 m-3 border justify-content-center  border-danger p-1" >
                    <Card onClick={() => this.cardClicked(dish)}>
                        <CardImg width="100%" src={dish.image} />
                        <CardImgOverlay className="ml-5">
                            <CardTitle>
                                {dish.name}
                            </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row col-12 justify-content-center border">
                    <div>
                        {this.renderDish(this.state.SelectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}
export default Menu;