import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Nav, Navbar, NavItem, NavbarBrand, Jumbotron} from 'reactstrap';



class Header extends Component{
    render(){
        return(
            <>
            <Jumbotron fluid style={{backgroundColor: '#f77D63', margin: 10, padding: 10, textAlign: 'center'}}>
                <h1>Welcome to the Artemisia Movie House</h1>
                <h4>Reno's locally operated movie theater with a difference!</h4>
            </Jumbotron>
            <Row>
                <Navbar sticky="top" >
                    <NavbarBrand href='/'></NavbarBrand>
                    <Nav navbar>
                        <NavItem>
                            <NavLink to='/home'>
                                <i className= "fa fa-film fa-2x"/>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/contact'>
                            <i className= "fa fa-envelope fa-2x"/>
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
