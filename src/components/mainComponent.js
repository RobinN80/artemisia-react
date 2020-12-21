import React, {Component} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Header from './headerComponent';
import Movies from './moviesComponent';
import About from './AboutComponent';
import Footer from './footerComponent';
import FindUs from './FindUsComponent';

class Main extends Component {
    render(){
        return(
            <div>
            <Header/>
            <hr/>
            <Switch>
                <Route path='/home' component={Movies}/>
                <Route exact path='/contact' component={About}/>
                <Route exact path='/findus' component={FindUs}/>
                <Redirect to='/home'/>
            </Switch>
            <hr/>
            <Footer/>
          </div>
        );
    }

}

export default Main;