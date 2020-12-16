
import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Row, Nav, Navbar, NavItem, NavbarBrand, Jumbotron,} from 'reactstrap';



class Header extends Component{

    render(){
        return(
            <>
            <Jumbotron fluid style={{backgroundColor: '#f77D63', margin: 10, padding: 10, textAlign: 'left'}}>
                <h1><img src={'../shared/projector.png'}/>Welcome to the Artemisia Movie House</h1>
                <h4>Reno's locally operated movie theater with a difference!</h4>
            </Jumbotron>
            <div className="container">
                <Navbar sticky="top" color='light' expand='md'>
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
                            <i className= "fa fa-envelope fa-2x"/>
                                Contact Us
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav-link">
                            <a href='https://www.google.com/maps/place/124+W+Taylor+St,+Reno,+NV+89509/@39.5163325,-119.8126294,17z/data=!4m5!3m4!1s0x809940b84323e03f:0xc03e614646f385e!8m2!3d39.5163325!4d-119.8104407' target='_blank'>
                            
                            <i className="fa fa-map-marker fa-2x" /> Find Us
                             
                             </a>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        </>
        )
    }
}


export default Header;
