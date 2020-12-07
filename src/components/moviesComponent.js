import React, {Component} from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import MOVIES from '../shared/movies';

function Movie(props) {
        const {title, image} = props.movie;
        console.log("Movie Props", props);
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
                                <Button onClick={props.toggleInfo}>More Info</Button>
                                <Button onClick={props.toggleTicketModel}>Buy Tickets</Button>
                            </CardFooter>
                        </CardBody> 
                    </Card>
                </Col>
            </Row>
        )

}

class Movies extends Component{
    constructor(props){
        super(props);
        this.state = {
            showInfo: false, 
            isTicketModelOpen: false
        };

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
           <> 
            <div>
            {MOVIES.map( MOVIE => 
                {
                return(
                        <Movie 
                            key={MOVIE.id} 
                            movie={MOVIE} 
                            toggleInfo={this.toggleInfo}
                            toggleTicketModel={this.toggleTicketModel}
                        />
                );
                })
            }
            </div>
            <div>
                <Modal
                    isOpen= {this.state.isTicketModelOpen}
                    toggle= {this.toggleTicketModel}
                >
                    <ModalHeader>Purchase Tickets</ModalHeader>
                    <ModalBody>

                    </ModalBody>

                </Modal>
            </div>
        </>
    )
    }
}

export default Movies;