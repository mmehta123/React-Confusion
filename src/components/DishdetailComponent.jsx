import React from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
class Dishdetailcomponent extends React.Component {
    
    constructor(){
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
    
    
    render() {

        const cmt=this.props.Dish.comments.map((item)=>{
            console.log(item.author)
            return (
                <p tag="li" className="lead">
                    {item.comment}<br/>
                    --{item.author}, {(item.date).split("T")[0]}    
                    {/*WE CAN ALSO USE:-  substr(0,10)  */}
                    <hr />
                </p>
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
                <div className="col-12 col-md p-2" list>

                    {/* {this.cmt(this.props.Dish.comments)} */}
                        {cmt}
                </div>
            </div>
        );
    }
}
export default Dishdetailcomponent;