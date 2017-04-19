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
import ToggleSwitchDemo from './demo/ToggleSwitchDemo';
import RadioGroupDemo from './demo/RadioGroupDemo';
import TooltipDemo from './demo/TooltipDemo';
import FormDemo from './demo/FormDemo';
import TagDemo from './demo/TagDemo';
import BadgeDemo from './demo/BadgeDemo';
import TypographyDemo from './demo/TypographyDemo';
import BoxDemo from './demo/BoxDemo';
import MessageDemo from './demo/MessageDemo';
import ProgressDemo from './demo/ProgressDemo';
import FlexboxDemo from './demo/FlexboxDemo';

ReactDOM.render(
  <Router>
    <App>
      <Route exact path="/" component={Demo} />
      <Route path="/buttons" component={ButtonDemo} />
      <Route path="/dropdowns" component={DropdownDemo} />
      <Route path="/inputs" component={InputDemo} />
      <Route path="/selects" component={SelectDemo} />
      <Route path="/checkboxes" component={CheckboxDemo} />
      <Route path="/toggleSwitches" component={ToggleSwitchDemo} />
      <Route path="/radioGroups" component={RadioGroupDemo} />
      <Route path="/tooltips" component={TooltipDemo} />
      <Route path="/forms" component={FormDemo} />
      <Route path="/tags" component={TagDemo} />
      <Route path="/badges" component={BadgeDemo} />
      <Route path="/typography" component={TypographyDemo} />
      <Route path="/boxes" component={BoxDemo} />
      <Route path="/messages" component={MessageDemo} />
      <Route path="/progressBars" component={ProgressDemo} />
      <Route path="/flexbox" component={FlexboxDemo} />
    </App>
  </Router>
  ,
  document.getElementById('root')
);
