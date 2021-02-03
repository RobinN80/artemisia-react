import React from "react";
import { Media } from "reactstrap";
import { connect } from "react-redux";
import moviesComponent from "./moviesComponent";

const mapStateToProps = (state) => {
  return {
    shoppingCart: state.shoppingCart,
  };
};

// function ShoppingCartItem() {
//     console.log("shopping cart:", props);
//     return (

//     );
// }

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
                <Media object src={ticket.image} alt={ticket.title} />
              </Media>
              <Media body>
                <Media heading></Media>
                For {ticket.title}
              </Media>
            </Media>
          );
        })}
      </div>
    );
  }
}

//const ConnectedShoppingCart = connect(mapStateToProps)(ShoppingCartItem);

export default connect(mapStateToProps)(ShoppingCart);
