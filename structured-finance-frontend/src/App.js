import React from 'react';
import {connect} from 'react-redux';
import {fetchDeals} from './actions/fetchDeals';

class App extends React.Component{

  componentDidMount(){
    // fetch('http://127.0.0.1:3000/api/v1/deals/1/reports', {method: 'GET'})
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    this.props.fetchDeals({type: 'FETCH_ACCOUNTS', payload: {name: 'Checking'}})
  }

  render(){
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default connect(null, {fetchDeals})(App);