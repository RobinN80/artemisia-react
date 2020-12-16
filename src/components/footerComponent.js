import React from 'react';

function Footer (){
    return(
        <footer className='site-footer'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-3">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li><i className= "fa fa-envelope"/> info@Artemisiamovies.org</li>
                            <li><i className="fa fa-phone"/> 775-337-9111</li>
                            <li><i className="fa fa-map-marker"/>214 W. Taylor St. Reno, NV 89509</li>
                        </ul>
                    </div>
                    <div className="col-9">
                        <p className="text-center font-weight-light">The Artemisa MovieHouse is a project of Great Basin Film Society 501(c)3</p>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;