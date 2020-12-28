import React, {Component} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Header from './headerComponent';
import Movies from './moviesComponent';
import About from './AboutComponent';
import Footer from './footerComponent';
import FindUs from './FindUsComponent';
import {addItemToCart} from '../redux/actions';
import { connect } from 'react-redux';
import ShoppingCart from './ShoppingCartComponent';

const mapDispatchToProps = {
    addItemToCart: (title, numRegular, numSenStud, numMembers) => (addItemToCart(title, numRegular, numSenStud, numMembers))
};


class Main extends Component {
    render(){
        return(
            <div>
            <Header/>
            <hr/>
            <Switch>
                <Route path='/home' render={(props) => (<Movies  addItemtoCart={this.props.addItemtoCart}/>)}/>
                <Route exact path='/contact' component={About}/>
                <Route exact path='/findus' component={FindUs}/>
                <Route exact path= '/cart' component={ShoppingCart}/>
                <Redirect to='/home'/>
            </Switch>
            <hr/>
            <Footer/>
          </div>
        );
    }

}

export default connect(null, mapDispatchToProps)(Main);