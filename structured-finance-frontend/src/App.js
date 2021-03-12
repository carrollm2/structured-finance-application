import React from 'react';
import {connect} from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './components/App.css'
import Home from './components/pages/Home'



import DealsContainer from './containers/DealsContainer'

class App extends React.Component{

  render(){

    return (
      <>
        <Router>
          <Navbar />
          <DealsContainer />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </>
    )

  }
}

export default connect()(App);
