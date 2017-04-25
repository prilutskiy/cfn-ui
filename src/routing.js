import React from 'react';
import { Route, BrowserRouter, HashRouter } from 'react-router-dom'; 
import DemoApp from './DemoApp';
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
import TabsDemo from './demo/TabsDemo';
import StoriesDemo from './demo/StoriesDemo';
import ChartsDemo from './demo/ChartsDemo';


const Router = process.env.NODE_ENV === 'development' ? BrowserRouter : HashRouter;
const routing = (
  <Router>
    <DemoApp>
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
      <Route path="/tabs" component={TabsDemo} />
      <Route path="/stories" component={StoriesDemo} />
      <Route path="/charts" component={ChartsDemo} />
    </DemoApp>
  </Router>
);

export default routing;