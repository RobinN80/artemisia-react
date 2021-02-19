import React from "react";
import { Media, Button } from "reactstrap";
import { connect } from "react-redux";
import "../ComponentCSS/ShoppingCart.css";
import { deleteItemFromCart } from "../redux/actions";
import { Component } from "react";

const mapStateToProps = (state) => {
  return {
    shoppingCart: state.shoppingCart,
  };
};

const mapDispatchToProps = {
  deleteItemFromCart: (title, image, numRegular, numSenStud, numMembers) =>
    deleteItemFromCart(title, image, numRegular, numSenStud, numMembers),
};

class ShoppingCartItem extends Component {
  constructor(props) {
    super(props);
  }

  handleDelete = () => {
    const {ticket} = this.props;
    this.props.deleteItemFromCart(ticket);
  };

  render() {
    
    const {ticket} = this.props;
    return (
      <Media className="media-group">
        <Media left middle className="media-group">
          <Media
            object
            className="media-image"
            src={ticket.image}
            alt={ticket.title}
          />
        </Media>
        <Media body>
          <Media heading>{ticket.title}</Media>
          <ul>
            <li>Regular Tickets: {ticket.numRegular}</li>
            <li>Member Tickets: {ticket.numMembers}</li>
            <li>Senior/Student Tickets: {ticket.numSenStud}</li>
          </ul>
        </Media>
        <Button onClick={this.handleDelete}>Remove Tickets</Button>
      </Media>
    );
  }
}

function ShoppingCart(props) {
  
  const tickets = props.shoppingCart.tickets;
  console.log("shoppingCart:", tickets);

  if (tickets.length === 0) {
    return <Media className="empty-cart">Your Shopping Cart is Empty!</Media>;
  } else {
    return (
      <div>
        {tickets.map((ticket) => {
          return <ConnectedShoppingCartItem key={ticket.title} ticket={ticket} />;
        })}
      </div>
    );
  }
}

const ConnectedShoppingCartItem = connect(null, mapDispatchToProps)(ShoppingCartItem);

export default connect(mapStateToProps)(ShoppingCart);
