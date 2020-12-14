import { Button } from 'reactstrap';
import React from 'react';

function Contact (props) {
    return (
        <div className="container">
            <div className="row"> 
                <div className="col">
                    <h2>Contact Us</h2>
                </div>
            </div>
            <div className='row'>
                <div className="col">  info@artemisiamovies.org
                    <Button role="button" href="mailto:info@artemisiamovies.org">Click to Email</Button>
                </div>
            </div>
        </div>
    );
}

export default Contact;