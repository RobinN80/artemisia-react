import React, {Component} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

 const MapContainer = withScriptjs(withGoogleMap((props) => 
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{lat: 39.5163251 , lng:-119.8122813}}
    >
        {props.isMarkerShown && <Marker position={{lat: 39.5163251 , lng:-119.8122813}}/>}

    </GoogleMap>));


    class FindUs extends Component {
        constructor(props){
            super(props);
            this.state= {
                isMarkerShown: true,
            }
        }

        render(){
            return(
                <MapContainer
                    isMarkerShown={this.state.isMarkerShown}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    googleMapURL= "https://www.google.com/maps/place/124+W+Taylor+St,+Reno,+NV+89509/@39.5163251,-119.8122813,17z/data=!4m5!3m4!1s0x809940b84323e03f:0xc03e614646f385e!8m2!3d39.5163325!4d-119.8104407"
                />
            )
        }
    }

export default FindUs;