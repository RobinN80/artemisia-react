import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavItem,
  NavbarBrand,
  Jumbotron,
  Collapse,
  NavbarToggler,
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav = () => this.setState({ isNavOpen: !this.state.isNavOpen });

  render() {
    return (
      <>
        <Jumbotron
          fluid
          style={{
            backgroundColor: "#f77D63",
            margin: 10,
            padding: 10,
            textAlign: "left",
          }}
        >
          <img src={"../shared/projector.png"} alt="Projector"/>
          <h1>
            Welcome to the Artemisia MovieHouse
          </h1>
          <h4>Reno's locally operated movie theater with a difference!</h4>
        </Jumbotron>
        <Navbar className="sticky-top" color="light" light expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} className="mr-2" />
            <NavbarBrand href="/">Artemisia</NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem className="nav-link">
                  <NavLink to="/home">
                    <i className="fa fa-film fa-2x" />
                    Home
                  </NavLink>
                </NavItem>
                <NavItem className="nav-link">
                  <NavLink to="/contact">
                    <i className="fa fa-info-circle fa-2x" />
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem className="nav-link">
                  <NavLink to="/findus">
                    <i className="fa fa-map-marker fa-2x" /> Find Us
                  </NavLink>
                </NavItem>
                <NavItem className="nav-link">
                  <NavLink to="/cart">
                    <i className="fa fa-shopping-cart fa-2x" /> Shopping Cart
                  </NavLink>
                </NavItem>
                <NavItem className="nav-link">
                  <NavLink to="/membership">
                    <i className="fa fa-users fa-2x" /> Membership
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}

export default Header;
