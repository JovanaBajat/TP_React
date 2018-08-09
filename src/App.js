// import  ".Styles/styles.scss";
import Form from "./components/Login/Login.js";
// import Nav from "./components/Nav/Nav.js";
import Profil from "./components/Profil/Profil.js";
import About from "./components/About/About.js";
import Home from "./components/Home/Home.js";
import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";



class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
   
    render() {
      return (
        <Router>
          <Switch>
            <Form />
            {/* <Route path='/profil' component={Profil} />
            <Route path='/about' component={About} />
            <Route path='/' component={Home} /> */}
          </Switch>
        </Router>
      );
    }
  }

  export default App;

