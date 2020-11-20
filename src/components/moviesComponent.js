import React, {Component} from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from 'reactstrap';
import MOVIES from '../shared/movies';

class Movie extends Component{
    render(){
        const {title, image} = this.props.movie;

        return(
            <Row style={{display: 'inline-block', width: 300, margin: 10}}>
                <Col>
                    <Card>
                        <CardHeader>{title}</CardHeader>
                        <CardBody>
                            <div src={image} alt='movie image'>
                                {image}
                            </div>
                            <CardFooter>
                                <Button onClick={this.toggleInfo}>More Info</Button>
                                <Button onClick={this.toggleTicketModel}>Buy Tickets</Button>
                            </CardFooter>
                        </CardBody> 
                    </Card>
                </Col>
            </Row>
        )
    }
}

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
        <div>
        {MOVIES.map( MOVIE => 
            {
            return(
                    <Movie key={MOVIE.id} movie={MOVIE} />
            );
            })
        }
        </div>
    )
    }
}

export default Movies;