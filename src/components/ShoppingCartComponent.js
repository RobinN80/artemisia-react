import React from "react";
import { Media } from "reactstrap";
import { connect } from "react-redux";
import moviesComponent from "./moviesComponent";

const mapStateToProps = (state) => {
  return {
    shoppingCart: state.shoppingCart,
  };
};

function ShoppingCart(props) {
  const tickets = props.shoppingCart.tickets;
  console.log("shoppingCart:", tickets);

  if (tickets.length === 0) {
    return <Media>Your Shopping Cart is Empty!</Media>;
  } else {
    return (
      <div>
        {tickets.map((ticket) => {
          return (
            <Media>
              <Media left middle>
                <Media object classname="media-image" style={{width: 200, height: 200}} src={ticket.image} alt={ticket.title} />
              </Media>
              <Media body>
                <Media heading>{ticket.title}</Media>
                Regular Tickets: {ticket.numRegular} 
              </Media>
            </Media>
          );
        })}
      </div>
    );
  }
}



export default connect(mapStateToProps)(ShoppingCart);
