
import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Row, Nav, Navbar, NavItem, NavbarBrand, Jumbotron,} from 'reactstrap';



class Header extends Component{

    render(){
        return(
            <>
            <Jumbotron fluid  style={{backgroundColor: '#f77D63', margin: 10, padding: 10, textAlign: 'left'}}>
                <h1><img src={'../shared/projector.png'}/>Welcome to the Artemisia MovieHouse</h1>
                <h4>Reno's locally operated movie theater with a difference!</h4>
            </Jumbotron>
            <div className="container">
                <Navbar className="sticky-top" color='light' expand='md'>
                    <NavbarBrand href='/'></NavbarBrand>
                    <Nav className="mr-auto" navbar >
                        <NavItem className="nav-item">
                            <NavLink to='/home' className="nav-link">
                                <i className= "fa fa-film fa-2x"/>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav-link">
                            <NavLink to='/contact' >
                            <i className= "fa fa-info-circle fa-2x"/>
                                About Us
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav-link">
                            <NavLink to='/findus'>
                                <i className="fa fa-map-marker fa-2x" /> Find Us
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav-link">
                            <NavLink to='/cart'>
                                <i className="fa fa-shopping-cart fa-2x" /> Shopping Cart
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        </>
        )
    }
}


export default Header;
