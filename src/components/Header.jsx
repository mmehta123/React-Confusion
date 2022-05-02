import React from "react";
import {
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
    Modal, ModalHeader, ModalBody, Button,
    Form, FormGroup, Input, Label
} from 'reactstrap';

import { NavLink } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <Navbar dark expand="md">
                        <div className="container">
                            <NavbarBrand className="mr-auto" href="/"><img src="/assets/download.png" height="30" width="41" alt='Ristorante Delicious' /></NavbarBrand>
                            <NavbarToggler onClick={this.toggleNav} />
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg">Home</span></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                            <Nav className="ml-auto" navbar>
                                <NavItem navbar>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg">Login</span></Button>
                                </NavItem>
                            </Nav>
                        </div>
                    </Navbar>
                    <Jumbotron>
                        <div className="container">
                            <div className="row row-header">
                                <div className="col-12 col-sm-6">
                                    <h1>Restorant Delicious</h1>
                                    <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                                </div>
                            </div>
                        </div>
                    </Jumbotron>

                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleLogin}>
                                <FormGroup >
                                    <Label for="username" >Username</Label>
                                    <Input type="text" id="username" name="username" placeholder="Username"
                                        innerRef={(input) => this.username = input} />
                                </FormGroup>
                                <FormGroup >
                                    <Label for="password" >Password</Label>
                                    <Input type="text" id="password" name="password" placeholder="Password"
                                        innerRef={(input) => this.password = input} />
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="remember"
                                            innerRef={(input) => this.remember = input} />
                                        Remember me
                                    </Label>
                                </FormGroup>
                                <Button type="submit" value="submit" color="primary">Login</Button>
                            </Form>
                        </ModalBody>
                    </Modal>

                </div>
            </React.Fragment>
        );
    }
}
export default Header;