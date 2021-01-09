import React, {Component} from 'react';
import { Button, Card, CardBody, CardImg, CardHeader, Collapse, Form, FormGroup, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import {connect} from 'react-redux';
import {addMovie} from '../redux/actions';


const mapStateToProps = state => {
    return {
        movies: state.movies
    };
};

const mapDispatchToProps = {
    addMovie: (title, numRegular, numSenStud, numMembers) => (addMovie(title, numRegular, numSenStud, numMembers)) 
};

class RenderMovie extends Component {
    constructor(props){
        super(props);
        this.state = {
            isTicketModalOpen: false,
            showInfo: false, 
            numRegular: 0,
            numSenStud: 0,
            numMembers: 0,
            totalPrice: 0,

        }

        this.toggleInfo = this.toggleInfo.bind(this);
        this.handleChangeRegular= this.handleChangeRegular.bind(this);
        this.handleChangeSenStud= this.handleChangeSenStud.bind(this);
        this.handleChangeMember= this.handleChangeMember.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    toggleTicketModal = () => {
        this.setState({isTicketModalOpen: !this.state.isTicketModalOpen});
    }

    toggleInfo(){
        this.setState({ showInfo: !this.state.showInfo });
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
    
    handleSubmit() {
            const {numRegular, numSenStud, numMembers} = this.state;
            const {title} = this.props.movie;
            this.setState ({totalPrice : numRegular*9 + numSenStud*7 + numMembers*5});
            console.log('tickets:', this.state);
            const ticket = {title: title, numRegular: numRegular, numSenStud: numSenStud, numMembers: numMembers };
            this.props.addMovie(ticket);
            this.toggleTicketModal();
            
        } 
        
        render(){
            const {title, image, date, description} = this.props.movie;
            console.log("Props", this.props);
            return(
                <Row style={{display: 'inline-block', width: 350, margin: 10}}>
                    <Card style={{borderRadius: 45, borderWidth: 'thick'}}>
                        <CardHeader style={{fontSize: 20}}>{title}</CardHeader>
                        <CardBody>
                            <div style= {{paddingBottom: 10, fontSize: 18, backgroundColor: "yellowgreen"}}>{date}</div>
                            <CardImg src={image} alt='movie image' />
                            <Collapse isOpen= {this.state.showInfo}>
                                <Row style={{display: 'inline-block', width: "500", margin: 10}}>
                                    <Card className= "flex-container">
                                        <CardBody>{description}</CardBody>    
                                    </Card>
                                    <Button onClick = {this.toggleInfo} color="primary">Show Less</Button>
                                </Row>
                            </Collapse>
                                <Collapse isOpen={!this.state.showInfo}>
                                    <Button onClick={this.toggleInfo} style={{margin: 10}}>More Info</Button> 
                                </Collapse>
                                <Button onClick={this.toggleTicketModal} style={{margin: 10}} color="primary">Buy Tickets</Button>
                        </CardBody> 
                        <Modal isOpen={this.state.isTicketModalOpen}>
                            <ModalHeader toggle={this.toggleTicketModal} ><i className= "fa fa-ticket-alt fa-2x"/>Purchase Tickets for {title}</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <FormGroup style={{textAlign :'center', fontSize : 'large'}}>
                                        Regular Admission $9 {''}
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
                                        Seniors and Students $7 {''}
                                        <select value={this.props.numSenStud} onChange={this.handleChangeSenStud}>
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
                                    <FormGroup>
                                    Total Price:  $ {''} {this.state.numRegular*9 + this.state.numSenStud*7 + this.state.numMembers*5 }
                                    <Button onClick={this.handleSubmit}>
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
        

}


class Movies extends Component{
    render(){
    return ( 
            <div>
            {this.props.movies.map( MOVIE =>  
                {
                    return(
                            <ConnectedRenderMovie 
                                key={MOVIE.id} 
                                movie={MOVIE}
                            />
                    );
                })
            }
            </div>  
        )
    }
}


const ConnectedRenderMovie = connect(null, mapDispatchToProps)(RenderMovie);

export default connect(mapStateToProps)(Movies);