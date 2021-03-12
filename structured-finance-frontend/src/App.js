import React from 'react';
import {connect} from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import DealsContainer from './containers/DealsContainer'

class App extends React.Component{

  render(){
    return (
      <div className="App">
        <Navbar />
        <DealsContainer />
      </div>
    );
  }
}

export default connect()(App);
