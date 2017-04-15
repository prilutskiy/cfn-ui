import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import './styles/styles.less';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import App from './App';
import Demo from './demo/Demo';
import ButtonDemo from './demo/ButtonDemo';
import InputDemo from './demo/InputDemo';
import DropdownDemo from './demo/DropdownDemo';
import SelectDemo from './demo/SelectDemo';
import CheckboxDemo from './demo/CheckboxDemo';

ReactDOM.render(
  <Router>
    <App>
      <Route exact path="/" component={Demo} />
      <Route path="/buttons" component={ButtonDemo} />
      <Route path="/dropdowns" component={DropdownDemo} />
      <Route path="/inputs" component={InputDemo} />
      <Route path="/selects" component={SelectDemo} />
      <Route path="/checkboxes" component={CheckboxDemo} />
    </App>
  </Router>
  ,
  document.getElementById('root')
);
