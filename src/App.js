import React, {Component} from 'react';
import './App.css';
import Header from './components/headerComponent';
import Movies from './components/moviesComponent';


class App extends Component {
 render(){
   return(
     <div>
       <Header/>
       <hr/>
       <Movies/>
       <hr/>
     </div>
   )
 }
}

export default App;
