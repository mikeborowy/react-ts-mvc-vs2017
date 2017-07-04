// This component handles the App template used on every page. React ecosystem
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';

console.log("init !!!");

ReactDOM.render(
  <App/>, 
  document.getElementById('app')
 );
