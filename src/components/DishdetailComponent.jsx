import React from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

function Cmt({dish}) {
    if (dish != null) {
        return (
            <div className="row ">
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

function RenderDish(props){
    return(
        <div className="col-12 col-md-6">
            <Card className="border">
                <CardBody>
                    <CardImg width="100%" src={props.dish.image} />
                    <CardTitle>
                        {props.dish.name}
                    </CardTitle>
                    <p>{props.dish.description}</p>
                </CardBody>
            </Card>
        </div>
    )
}

function Dishdetailcomponent (props) {
        return (
            <div className=" container row pt-4 border ml-auto mr-auto bg-warning">
                <RenderDish dish={props.dish}/>
                <div className="col-12 col-md-6 p-2">
                    <Cmt dish={props.dish.comments}/>
                </div>
            </div>
        );
    }
export default Dishdetailcomponent;