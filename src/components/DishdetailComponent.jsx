import React from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
class Dishdetailcomponent extends React.Component {

    constructor() {
        super();
    }

    cmt(dish) {
        if (dish != null) {
            return (
                <ul className="list-group">
                    <h3 className="offset-4 ">Comments</h3>
                    {dish.map((item) => {
                        return (
                            <li className="list-group-item">
                                <p>
                                    {item.comment} <br />
                                    --{item.author}, {(item.date).split("T")[0]}
                                </p>
                            </li>
                        );
                    })}
                </ul>
            )
        }

    }

    render() {
        // const cmt = this.props.Dish.comments.map((item) => {
        //     console.log(item.author)
        //     return (
        //         <ul key={item.id} className="list-group">
        //             <li className="list-group-item">
        //                 <p>
        //                     {item.comment} <br />
        //                     --{item.author}, {(item.date).split("T")[0]}
        //                     {/*WE CAN ALSO USE:-  substr(0,10)  */}
        //                 </p>
        //             </li>
        //         </ul>
        //     );
        // })

        return (
            <div className="row p-2">
                <div className="col-12 col-md-6">
                    <Card >
                        <CardImg width="100%" src={this.props.Dish.image} />
                        <CardBody>
                            <CardTitle>
                                {this.props.Dish.name}
                            </CardTitle>
                            <p>{this.props.Dish.description}</p>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md p-2">

                    {this.cmt(this.props.Dish.comments)}
                    {/* {cmt} */}
                </div>
            </div>
        );
    }
}
export default Dishdetailcomponent;