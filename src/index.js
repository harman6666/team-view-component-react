import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/index';
import './styles/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-power-select/dist/react-power-select.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render((
<Router>
  <App />
</Router>
), document.getElementById('root'));