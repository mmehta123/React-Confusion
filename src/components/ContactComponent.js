import React from 'react';
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends React.Component {
    constructor(props) {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'tel',
            message: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEvent = this.handleEvent.bind(this);
    }
    handleEvent(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState(
            {
                [name]: value
            }
        );
    }

    handleSubmit(event) {
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>

                <div className='row row-content'>
                    <div className='col-12'>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row md={9}>
                                <Label for="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" value={this.state.firstname} placeholder="First Name"
                                        id="firstname" name="firstname" onChange={this.handleEvent} />
                                </Col>
                            </FormGroup>
                            <FormGroup row md={9}>
                                <Label for="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" value={this.state.lastname} placeholder="Last Name"
                                        id="lastname" name="lastname" onChange={this.handleEvent} />
                                </Col>
                            </FormGroup>
                            <FormGroup row md={9}>
                                <Label for="tel" md={2}>Tel. No.</Label>
                                <Col md={10}>
                                    <Input type="tel" value={this.state.telnum} placeholder="Telephone Number"
                                        id="telnum" name="telnum" onChange={this.handleEvent} />
                                </Col>
                            </FormGroup>
                            <FormGroup row md={9}>
                                <Label for="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" value={this.state.email} placeholder=" Email"
                                        id="email" name="email" onChange={this.handleEvent} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                onChange={this.handleEvent} />
                                            {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type="select" name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleEvent}
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row md={9}>
                                <Label md={2} for="message">Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message" rows="12"
                                        value={this.state.message} onChange={this.handleEvent}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>

                    </div>

                </div>
            </div>
        );
    }
}

export default Contact;