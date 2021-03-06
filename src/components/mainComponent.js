import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './headerComponent';
import Movies from './moviesComponent';
import About from './AboutComponent';
import Footer from './footerComponent';
import FindUs from './FindUsComponent';
import ShoppingCart from './ShoppingCartComponent';
import Membership from './MembershipComponent';


class Main extends Component {
    render(){
        return(
            <div>
            <Header/>
            <hr/>
            <Switch>
                <Route path='/home' render={() => (<Movies  store={this.props.store}/>)}/>
                <Route exact path='/contact' component={About}/>
                <Route exact path='/findus' component={FindUs}/>
                <Route exact path= '/cart' component={ShoppingCart}/>
                <Route exact path = '/membership' component={Membership}/>
                <Redirect to='/home'/>
            </Switch>
            <hr/>
            <Footer/>
          </div>
        );
    }

}

export default Main;