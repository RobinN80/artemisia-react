import React, {Component} from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Collapse, Form, FormGroup, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import MOVIES from '../shared/movies';
//import '../App.css';

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
    } 



    render(){
    
    return ( 
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
            <div>
                <Modal
                    isOpen= {this.state.isTicketModalOpen}
                    toggle= {this.toggleTicketModal}
                    value= {this.state.value}
                    totalPrice={this.handleTicketsPrice}
                >
                    <ModalHeader toggle={this.toggleTicketModal}>Purchase Tickets</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup style={{textAlign :'center', fontSize : 'large'}}>
                                Regular Admission $9
                                <select value= {this.state.numRegular} onChange={this.handleChangeRegular}>
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
                                Seniors and Students $7
                                <select value={this.state.numSenStud} onChange={this.handleChangeSenStud}>
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
                                <label>Members $5 
                                    <select value={this.state.numMembers} onChange={this.handleChangeMember} >
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
                            Total Price:  $ {this.state.numRegular*9 + this.state.numSenStud*7 + this.state.numMembers*5}
                            <Button onClick={this.handleSubmit}>
                                Purchase Tickets
                            </Button>
                        </Form>
                    </ModalBody>

                </Modal>
            </div>
            </div>  
    )
    }
}



export default Movies;