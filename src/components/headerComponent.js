import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Nav, Navbar, NavItem, NavbarBrand} from 'reactstrap';



class Header extends Component{
    render(){
        return(
            <>
            <div>
                <h1>Welcome to the Artemisia Movie House</h1>
                <h3>Reno's locally operated movie theater with a difference!</h3>
            </div>
            <Row>
                <Navbar sticky="top">
                    <NavbarBrand href='/'></NavbarBrand>
                    <Nav navbar>
                        <NavItem>
                            <NavLink to='/home'>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/contact'>
                                Contact Us
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </Row>
        
        </>
        )
    }
}


export default Header;
