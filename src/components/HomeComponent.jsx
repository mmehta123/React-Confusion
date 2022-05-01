import React from "react";
import { Card, CardImg, CardTitle, CardBody, CardText, CardSubtitle } from "reactstrap";

function Render({ item }) {
    return (
        <Card>
            <CardImg height="250px" src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

export default function Home(props) {

    return (
        <div className="container">
            <div className="row border">
                <div className="col-12 col-md-4 m-1">
                    <Render item={props.dish} />
                </div>
                <div className="col-12 col-md-4 m-1">
                    <Render item={props.promotion} />
                </div>
                <div className="col-12 col-md-4 m-1">
                    <Render item={props.leader} />
                </div>

            </div>
        </div>
    );
}