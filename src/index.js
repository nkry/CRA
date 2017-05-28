import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Main from './components/Main';
import 'normalize-scss';
import './styles/main.scss';
import { Provider } from 'react-redux';
import Store from './store';

const assets = process.env.PUBLIC_URL + '/assets/';
const StoreInstance = Store();

console.log("???", StoreInstance.getState())

// Provider exposes store to application 
ReactDOM.render(
  <Provider store={StoreInstance}>
    <Router history={browserHistory}>
      <Route path="/" component={Main} assets={assets} />
    </Router>
  </Provider>,
  document.getElementById('root')
);