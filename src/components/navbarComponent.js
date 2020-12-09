import React, {Component} from 'react';
import {Row, Navbar, NavbarBrand} from 'reactstrap'

function Nav() {
        return (
            <Row>
                <Navbar>
                    <NavbarBrand>Home</NavbarBrand>
                    <NavbarBrand>More Info</NavbarBrand>
                    <NavbarBrand>About Us</NavbarBrand>
                </Navbar>
            </Row>
        ); 
}

export default Nav;