import React, {Component} from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, CardImg } from 'reactstrap';
import MOVIES from '../shared/movies';

class Movies extends Component{
    constructor(props){
    super(props);
    this.state = {showInfo: false, isTicketModelOpen: false};

    this.toggleInfo = this.toggleInfo.bind(this);
    this.toggleTicketModel= this.toggleTicketModel.bind(this);
    }

    toggleInfo(){
    this.setState({ showInfo: !this.state.showInfo });
    }

    toggleTicketModel(){
    this.setState({ isTicketModelOpen : !this.state.isTicketModelOpen});
    }

    render(){
    return (
        <div style={{display: 'inline-block', width: 300, margin: 10}}>
        {MOVIES.map( movie => 
            {
            return(
                <div className = {Card}>
                <div className = {CardHeader}>{movie.title}
                </div>
                <div className = {CardBody}>
                    <div className = {CardImg}>{movie.image}</div>
                    <div className = {CardFooter}>
                    <Button onClick={this.toggleInfo}>More Info</Button>
                    <Button onClick={this.toggleTicketModel}>Buy Tickets</Button>
                    </div>
                </div> 
                </div>
            );
            })
        }
        </div>
    )
    }
}

export default Movies;