import React from "react";
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <Navbar dark>
                        <div className="container">
                            <NavbarBrand href="#">Restaurant Delicious</NavbarBrand>
                        </div>
                    </Navbar>
                    <Jumbotron>
                        <div className="container">
                            <div className="row row-header">
                                <div className="col-12 col-sm-6">
                                    <h1>Ristorante Delicious</h1>
                                    <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                                </div>
                            </div>
                        </div>
                    </Jumbotron>

                </div>
            </React.Fragment>
        );
    }
}
export default Header;