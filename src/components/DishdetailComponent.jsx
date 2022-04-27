import React from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

class Dishdetailcomponent extends React.Component {
    constructor() {
        super();
    }

    cmt(dish) {
        if (dish != null) {
            return (
                <div className="container">
                    <ul className="list-group">
                        <h3 className="offset-4 ">Comments</h3>
                        {dish.map((item) => {
                            return (
                                <li key={item.id} className="list-group-item">
                                    <p>
                                        {item.comment} <br />
                                        --{item.author}, {(item.date).split("T")[0]}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )
        }
    }

    render() {
        console.log(this.props.dish)
        return (
            <div className="row pt-4 border">
                <div className="col-12 col-md-6">
                    <Card className="border">
                        <CardBody>
                            <CardImg width="100%" src={this.props.dish.image} />
                            <CardTitle>
                                {this.props.dish.name}
                            </CardTitle>
                            <p>{this.props.dish.description}</p>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-6 p-2">
                    {this.cmt(this.props.dish.comments)}
                </div>
            </div>
        );
    }
}
export default Dishdetailcomponent;