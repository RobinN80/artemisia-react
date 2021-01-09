import React from 'react';
import {Media} from 'reactstrap';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        shoppingCart: state.shoppingCart
    };
};


function ShoppingCartItem() {
    return (
        <Media>
            <Media left href="">
                <Media object data-src="" alt=""/>
            </Media>
            <Media body>
                <Media heading>
                    {}
                </Media>
                Date of film and title of film goes here
            </Media>
        </Media>
    );
}

function ShoppingCart(props) {
    const shoppingCart = props.shoppingCart;
    console.log(shoppingCart);

    if (shoppingCart.length === 0) {
        return(
            <Media>
            Your Shopping Cart is Empty!
            </Media>
        );
    } else {
        return(
            <ShoppingCartItem/>
        );
    }  
}

export default connect(mapStateToProps)(ShoppingCart);