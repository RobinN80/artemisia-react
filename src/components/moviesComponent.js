import React, {Component} from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Collapse, Form, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import MOVIES from '../shared/movies';

function Movie(props) {
        const {title, image, date, description} = props.movie;
        console.log("Movie Props", props);
        return(
            <Row style={{display: 'inline-block', width: 300, margin: 10}}>
                <Card>
                    <CardHeader>{title}</CardHeader>
                    <CardBody>
                        <div style= {{paddingBottom: 10, fontSize: 18, backgroundColor: "yellowgreen"}}>{date}</div>
                        <div src={image} alt='movie image'>
                            {image}
                        </div>
                        <Collapse isOpen= {props.showInfo}>
                            <Row style={{display: 'inline-block', width: "90%", margin: 10}}>
                                <Card>
                                    <CardHeader>{title}</CardHeader>
                                    <CardBody>{description}</CardBody>
                                    <Button onClick = {props.toggleInfo}>Show Less</Button>
                                </Card>
                            </Row>)
                        </Collapse>
                        <CardFooter>
                            <Button onClick={props.toggleInfo} style={{margin: 10}}>More Info</Button>
                            <Button onClick={props.toggleTicketModal} style={{margin: 10}}>Buy Tickets</Button>
                        </CardFooter>
                    </CardBody> 
                </Card>
            </Row>
        )

}

class Movies extends Component{
    constructor(props){
        super(props);
        this.state = {
            showInfo: false, 
            isTicketModalOpen: false
        };

        this.toggleInfo = this.toggleInfo.bind(this);
        this.toggleTicketModal= this.toggleTicketModal.bind(this);
    }


    toggleInfo(){
    this.setState({ showInfo: !this.state.showInfo });
    }

    toggleTicketModal(){
    this.setState({ isTicketModalOpen : !this.state.isTicketModalOpen});
    }

    render(){
    return (
           <> 
            <div>
            {MOVIES.map( MOVIE => 
                {
                return(
                    <>
                        <Movie 
                            key={MOVIE.id} 
                            movie={MOVIE} 
                            toggleInfo={this.toggleInfo}
                            toggleTicketModal={this.toggleTicketModal}
                            toggleInfo={this.toggleInfo}
                        />
                        
                    </>
                );
                })
            }
            </div>
            <div>
                <Modal
                    isOpen= {this.state.isTicketModalOpen}
                    toggle= {this.toggleTicketModal}
                >
                    <ModalHeader>Purchase Tickets</ModalHeader>
                    <ModalBody>
                        <Form>
                                Type of Ticket?
                                <select>
                                    <option value={7}>Regular Admission</option>
                                    <option value={5}>Member Price</option>
                                </select>

                                Number of Tickets? 
                                <select>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                </select>
                            
                        </Form>
                    </ModalBody>

                </Modal>
            </div>
        </>
    )
    }
}

export default Movies;