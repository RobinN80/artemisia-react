import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
} from "reactstrap";
import React, { Component } from "react";

class Membership extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNum: "",
      email: "",
      date: new Date().toLocaleString(),
      agree: false,
      contactType: "By Email",
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [target.name]: value,
    });
  };

  handleSubmit = (event) => {
    console.log("Current state is:" + JSON.stringify(this.state));
    alert("Current state is:" + JSON.stringify(this.state));

    event.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Membership With Artemisia</h2>
            <p>Support the Artemisia by becoming a member!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-7">
            <Card>
              <CardHeader style={{ backgroundColor: "yellowgreen" }}>
                Membership Update:
              </CardHeader>
              <CardBody>
                <p>
                  However long the shutdown lasts, Artemisia will extend all
                  current memberships for that amount of time that we were not
                  screening.
                </p>
                <p>
                  The members of the Artemisia MovieHouse believe moviegoing can
                  be a fun and enriching experience and are committed to
                  promoting film as an important artistic medium.
                </p>
              </CardBody>
            </Card>
          </div>
          <div className="col-5">
            <Card>
              <CardHeader style={{ backgroundColor: "yellowgreen" }}>
                Membership Perks
              </CardHeader>
              <CardBody>
                <ul>
                  <li>Discounted tickets to all films.</li>
                  <li>Access to private member events.</li>
                  <li>The opportunity to be part of the club!</li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h2>Become a Member</h2>
            <hr />
          </div>
          <div className="col-md-10">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="firstName" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastName" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="phoneNum" md={2}>
                  Phone
                </Label>
                <Col md={10}>
                  <Input
                    type="tel"
                    id="phoneNum"
                    name="phoneNum"
                    placeholder="Phone number"
                    value={this.state.phoneNum}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 4, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="agree"
                        checked={this.state.agree}
                        onChange={this.handleInputChange}
                      />{" "}
                      <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <Input
                    type="select"
                    name="contactType"
                    value={this.state.contactType}
                    onChange={this.handleInputChange}
                  >
                    <option>By Phone</option>
                    <option>By Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Submit
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

export default Membership;
