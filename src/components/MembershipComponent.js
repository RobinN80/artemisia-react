import { Card, CardBody, CardHeader} from 'reactstrap';
import React from 'react';

function Membership (props) {
    return (
        <div className="container">
            <div className="row"> 
                <div className="col">
                    <h2>Membership With Artemisia</h2>
                    <p>Support the Artemisia by becoming a member!</p>
                </div>
            </div>
            <div className='row'>
                <div className="col-7">  
                   <Card>
                        <CardHeader style= {{backgroundColor: 'yellowgreen'}}>
                            Membership Update:
                        </CardHeader>
                        <CardBody>
                        <p>However long the shutdown lasts, Artemisia will extend all current
                        memberships for that amount of time that we were not screening.
                        </p>
                        <p>The members of the Artemisia MovieHouse believe moviegoing can be a fun and enriching experience and are committed to promoting film as an important artistic medium.</p>
                        </CardBody>
                   </Card>
                </div>
                <div className="col-5">
                    <Card>
                        <CardHeader style= {{backgroundColor: 'yellowgreen'}}>Membership Perks</CardHeader>
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
        </div>
    );
}

export default Membership;