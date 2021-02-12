import React from "react";
import { Media , Button } from "reactstrap";
import { connect } from "react-redux";
import '../ComponentCSS/ShoppingCart.css';
import {deleteItemFromCart} from '../redux/actions';


const mapStateToProps = (state) => {
  return {
    shoppingCart: state.shoppingCart,
  };
};

const mapDispatchToProps = {
  deleteItemFromCart: (title, image, numRegular, numSenStud, numMembers) => (deleteItemFromCart(title, image, numRegular, numSenStud, numMembers)) 
};

function ShoppingCart(props) {
  const tickets = props.shoppingCart.tickets;
  console.log("shoppingCart:", tickets);

  if (tickets.length === 0) {
    return <Media className="empty-cart">Your Shopping Cart is Empty!</Media>;
  } else {
    return (
      <div>
        {tickets.map((ticket) => {
          return (
            <Media className="media-group">
              <Media left middle className = "media-group">
                <Media object className="media-image" src={ticket.image} alt={ticket.title} />
              </Media>
              <Media body>
                <Media heading>{ticket.title}</Media>
                <ul>
                  <li>Regular Tickets: {ticket.numRegular}</li>
                  <li>Member Tickets: {ticket.numMembers}</li>
                  <li>Senior/Student Tickets: {ticket.numSenStud}</li>
                </ul>
                
              </Media>
              <Button onClick = {props.deleteItemFromCart}>Remove Tickets</Button>
            </Media>
          );
        })}
      </div>
    );
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
