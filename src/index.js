import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import 'normalize-scss';
import './styles/main.scss';
const assets = process.env.PUBLIC_URL + '/assets/';

ReactDOM.render(
  <Main assets={assets} />,
  document.getElementById('root')
);
