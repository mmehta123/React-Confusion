import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, Breadcrumb, BreadcrumbItem, CardImgOverlay, CardTitle } from "reactstrap";

function Cmt({ dish }) {
    if (dish != null) {
        return (
            <div className="row ">
                <h3 className="offset-4 ">Comments</h3>
                <ul className="list-group">
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

function RenderDish(props) {
    return (
        <div className="col-12">
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

function Dishdetailcomponent(props) {
    console.log(props.dish)
    return (
        <div className=" container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12  ">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row pt-4 border ml-auto mr-auto bg-warning border-danger">
                <div className="col-12 col-md-6">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md mr-3 mb-2 ">
                    <Cmt dish={props.comment} />
                </div>
            </div>
        </div>
    );
}
export default Dishdetailcomponent;