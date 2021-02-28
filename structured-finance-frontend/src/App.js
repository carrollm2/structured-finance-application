import React from 'react';
import {connect} from 'react-redux';
import DealsContainer from './containers/DealsContainer'

class App extends React.Component{

  render(){
    return (
      <div className="App">
        <DealsContainer />
      </div>
    );
  }
}

export default connect()(App);
