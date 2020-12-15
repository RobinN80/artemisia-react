import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Header from './components/headerComponent';
import Movies from './components/moviesComponent';
import Contact from './components/contactComponent';


class App extends Component {
 render(){
   return(
    <BrowserRouter> 
     <div>
       <Header/>
       <hr/>
       <Switch>
          <Route path='/home' component={Movies}/>
          <Route path='/about' />
          <Route exact path='/contact' component={Contact}/>
          <Redirect to='/home'/>
       </Switch>
       <hr/>
     </div>
     </BrowserRouter>
   )
 }
}

export default App;
