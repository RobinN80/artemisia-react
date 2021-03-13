import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Input,
  Form,
  FormGroup,
} from "reactstrap";
import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginModalOpen: false,
    };
  }

  toggleLoginModal = () => {
    this.setState({ isLoginModalOpen: !this.state.isLoginModalOpen });
  };

  handleLogin = (event) => {
    alert(
      `Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.value}`
    );
    this.toggleLoginModal();
    event.preventDefault();
  };

  render() {
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-3">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-envelope" /> info@Artemisiamovies.org
                </li>
                <li>
                  <i className="fa fa-phone" /> 775-337-9111
                </li>
                <li>
                  <i className="fa fa-map-marker" />
                  214 W. Taylor St. Reno, NV 89509
                </li>
              </ul>
            </div>
            <div className="col-8">
              <p className="text-center font-weight-light">
                The Artemisa MovieHouse is a project of Great Basin Film Society
                501(c)3
              </p>
            </div>
            <div className="col-1">
              <Button onClick={this.toggleLoginModal}>
                <i className="fa fa-unlock" />
                Login
              </Button>
            </div>
            <Modal
              isOpen={this.state.isLoginModalOpen}
              toggle={this.toggleLoginModal}
            >
              <ModalHeader toggle={this.toggleLoginModal}>
                Admin Login
              </ModalHeader>
              <ModalBody>
                <Form>
                  <FormGroup className="form-group">
                    <Label htmlFor="username">Username:</Label>
                    <Input
                      type="text"
                      id="username"
                      name="username"
                      innerRef={(input) => (this.username = input)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Password:</Label>
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      innerRef={(input) => (this.password = input)}
                    />
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="remember"
                        innerRef={(input) => (this.remember = input)}
                      />
                      Remember
                    </Label>
                  </FormGroup>
                  <Button type="submit" value="submit" onClick={this.handleLogin}>
                    Login
                  </Button>
                </Form>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
