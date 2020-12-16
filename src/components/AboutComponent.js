import { Card, CardBody, CardHeader} from 'reactstrap';
import React from 'react';

function About (props) {
    return (
        <div className="container">
            <div className="row"> 
                <div className="col">
                    <h2>About Us</h2>
                    <p>Founded on February 4th 2011 the Artemisia MovieHouse is the result of a friendship between the Great Basin Film Society (founded in 2001) and the Artemisia (founded in 2010).</p>
                </div>
            </div>
            <div className='row'>
                <div className="col-7">  
                   <Card>
                        <CardHeader style= {{backgroundColor: 'yellowgreen'}}>
                            Our Mission:
                        </CardHeader>
                        <CardBody>
                        <p>Our mission is to complement Reno's film scene with art, independent and classic features and unique short subject presentations. We are continually striving to provide the residents of the Reno/Sparks metropolitan area with opportunities to view films that have never been shown in the Washoe County area, have not appeared in theaters for many years or are not readily available on home video.</p>
                        <p>The members of the Artemisia MovieHouse believe moviegoing can be a fun and enriching experience and are committed to promoting film as an important artistic medium.</p>
                        </CardBody>
                   </Card>
                </div>
                <div className="col-5">
                    <Card>
                        <CardHeader style= {{backgroundColor: 'yellowgreen'}}>BOARD OF DIRECTORS</CardHeader>
                        <CardBody>
                            <ul>
                                <li>President - Bob Alto</li>
                                <li>Secretary - Martine Carlin</li>
                                <li>Treasurer - Steve Savage</li>
                                <li>Director - Brad Small</li>
                                <li> Director -  Roger Slugg</li>
                                <li> Director - Robin Novak</li>
                                <li> Director - Isabelle Favre</li>
                            </ul>
                        </CardBody>
                    </Card>
                    
                </div>
            </div>
            <div className= "row">
                <div className="col">
                    <Card>
                        <CardHeader style= {{backgroundColor: 'yellowgreen'}}>Staff</CardHeader>
                        <CardBody>
                        <ul>
                                <li>Executive Director, Webmaster, Programmer, Curator - John McCarthy</li>
                                <li>Volunteer Coordinator, Projectionist - Linda Miller</li>
                                <li>Projectionist - Leo Demski</li>
                                <li>Projectionist - Linda Star</li>
                                <li> Volunteer -  Judith Cordray</li>
                                <li> Volunteer - Bruce Porter</li>
                                <li> Volunteer - Laurel Hoggan</li>
                            </ul>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default About;