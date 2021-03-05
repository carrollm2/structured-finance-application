import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom';


import {Provider} from 'react-redux';

import App from './App';
import dealReducer from './reducers/dealReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


let store = createStore(dealReducer, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>  
  </Provider>,
  document.getElementById('root'));