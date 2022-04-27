import React from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
class Dishdetailcomponent extends React.Component {

    constructor() {
        super();
    }

    // cmt(dish){                                   //Problem not working not returning item.comment to render return 
    //     dish.map((item)=>{
    //         console.log(item.comment)
    //         return( 
    //             <div>{item.comment}</div>
    //         );
    //     })
    // }

    //      renderComments(dish) {          //This is working properly how?not mine.
    //     if (dish != null)
    //       return (
    //         <div>
    //           <h4>Comments</h4>
    //           <ul class="list-unstyled">
    //             {dish.comments.map((comment) => {
    //               return (
    //                 <li>
    //                   <p>{comment.comment}</p>
    //                   <p>--{comment.author + " , " + new Date(comment.date)}</p>
    //                 </li>
    //               );
    //             })}
    //           </ul>
    //         </div>
    //       );
    // }


    render() {

        const cmt = this.props.Dish.comments.map((item) => {
            console.log(item.author)
            return (
                <ul key={item.id} className="list-group">
                    <li className="list-group-item">
                        <p>
                            {item.comment} <br />
                            --{item.author}, {(item.date).split("T")[0]}
                            {/*WE CAN ALSO USE:-  substr(0,10)  */}
                        </p>
                    </li>

                </ul>
            );
        })

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

                    {/* {this.cmt(this.props.Dish.comments)} */}
                    {/* {this.renderComments(this.props.Dish.comments)} */}
                    {cmt}
                </div>
            </div>
        );
    }
}
export default Dishdetailcomponent;