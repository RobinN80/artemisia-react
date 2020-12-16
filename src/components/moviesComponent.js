import React, {Component} from 'react';
import { Button, Card, CardBody, CardFooter, CardImg, CardHeader, Col, Collapse, Form, FormGroup, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import MOVIES from '../shared/movies';

function RenderMovie(props) {
        const {title, image, date, description} = props.movie;
        console.log("Movie Props", props);
        return(
            <Row style={{display: 'inline-block', width: 350, margin: 10}}>
                <Card style={{borderRadius: 45, borderWidth: 'thick'}}>
                    <CardHeader style={{fontSize: 20}}>{title}</CardHeader>
                    <CardBody>
                        <div style= {{paddingBottom: 10, fontSize: 18, backgroundColor: "yellowgreen"}}>{date}</div>
                        <CardImg src={image} alt='movie image' />
                        <Collapse isOpen= {props.showInfo}>
                            <Row style={{display: 'inline-block', width: "500", margin: 10}}>
                                <Card className= "flex-container">
                                    <CardBody>{description}</CardBody>    
                                </Card>
                                <Button onClick = {props.toggleInfo} color="primary">Show Less</Button>
                            </Row>
                        </Collapse>
                            <Collapse isOpen={!props.showInfo}>
                                <Button onClick={props.toggleInfo} style={{margin: 10}}>More Info</Button> 
                            </Collapse>
                            <Button onClick={props.toggleTicketModal} style={{margin: 10}} color="primary">Buy Tickets</Button>
                    </CardBody> 
                    <Modal isOpen={props.isTicketModalOpen}>
                    <ModalHeader toggle={props.toggleTicketModal} ><i className= "fa fa-ticket-alt fa-2x"/>Purchase Tickets for {title}</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup style={{textAlign :'center', fontSize : 'large'}}>
                                Regular Admission $9 {''}
                                <select value= {props.numRegular} onChange={props.handleChangeRegular}>
                                    <option value={0}>0</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                </select>

                            </FormGroup>
                            <FormGroup style={{textAlign :'center', fontSize : 'large'}}>
                                Seniors and Students $7 {''}
                                <select value={props.numSenStud} onChange={props.handleChangeSenStud}>
                                    <option value={0}>0</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                </select>
                            </FormGroup>
                            <FormGroup style={{textAlign :'center', fontSize : 'large'}}>
                                <label>Members $5 {''}
                                    <select value={props.numMembers} onChange={props.handleChangeMember} >
                                        <option value={0}>0</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                    </select>
                                </label>
                            </FormGroup>
                            <FormGroup>
                            Total Price:  $ {''} {props.numRegular*9 + props.numSenStud*7 + props.numMembers*5 }
                            <Button onClick={props.handleSubmit}>
                                Purchase Tickets
                            </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>

                </Modal>
                </Card>
            </Row>
        )

}


class Movies extends Component{
    constructor(props){
        super(props);
        this.state = {
            showInfo: false, 
            isTicketModalOpen: false,
            numRegular: 0,
            numSenStud: 0,
            numMembers: 0,
            totalPrice: 0,

        };

        this.toggleInfo = this.toggleInfo.bind(this);
        this.toggleTicketModal= this.toggleTicketModal.bind(this);
        this.handleChangeRegular= this.handleChangeRegular.bind(this);
        this.handleChangeSenStud= this.handleChangeSenStud.bind(this);
        this.handleChangeMember= this.handleChangeMember.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);

    }


    toggleInfo(){
    this.setState({ showInfo: !this.state.showInfo });
    }

    toggleTicketModal(){
    this.setState({ isTicketModalOpen : !this.state.isTicketModalOpen});
    }

    handleChangeRegular(event){
        this.setState({numRegular: event.target.value});
    }

    handleChangeSenStud(event){
        this.setState({numSenStud: event.target.value});
    }

    handleChangeMember(event){
        this.setState({numMembers: event.target.value});
    }

    handleSubmit(){
        console.log('tickets:', this.state.numMembers, this.state.numSenStud, this.state.numRegular);
        this.setState ({totalPrice : this.state.numRegular*9 + this.state.numSenStud*7 + this.state.numMembers*5});
        this.toggleTicketModal();
    } 



    render(){
    return ( 
            <div>
            {MOVIES.map( MOVIE => 
                {
                return(
                        <RenderMovie 
                            key={MOVIE.id} 
                            movie={MOVIE} 
                            showInfo = {this.state.showInfo}
                            toggleInfo={this.toggleInfo}
                            toggleTicketModal={this.toggleTicketModal}
                            isTicketModalOpen={this.state.isTicketModalOpen}
                            value= {this.state.value}
                            totalPrice={this.handleTicketsPrice}
                            numMembers={this.state.numMembers}
                            numRegular={this.state.numRegular}
                            numSenStud={this.state.numSenStud}
                            handleChangeMember={this.handleChangeMember}
                            handleChangeRegular={this.handleChangeRegular}
                            handleChangeSenStud={this.handleChangeSenStud}
                            handleSubmit={this.handleSubmit}
                        />
                );
                })
            }
            </div>  
    )
    }
}




export default Movies;