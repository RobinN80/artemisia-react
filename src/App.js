import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Header from './components/headerComponent';
import Movies from './components/moviesComponent';
import About from './components/AboutComponent';
import Footer from './components/footerComponent';


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
          <Route exact path='/contact' component={About}/>
          <Redirect to='/home'/>
       </Switch>
       <hr/>
       <Footer/>
     </div>
     </BrowserRouter>
   )
 }
}

export default App;
