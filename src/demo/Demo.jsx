import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';

console.log(Grid, Row, Col);

class Demo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Link to="/buttons">Button</Link>
        </div>
        <div>
          <Link to="/dropdowns">Dropdown</Link>
        </div>
        <div>
          <Link to="/inputs">Input</Link>
        </div>
        <div>
          <Link to="/selects">Select</Link>
        </div>
        <div>
          <Link to="/checkboxes">Checkbox</Link>
        </div>
        <div>
          <Link to="/toggleSwitches">Toggle Switch</Link>
        </div>
        <div>
          <Link to="/radioGroups">Radio Group</Link>
        </div>
        <div>
          <Link to="/tooltips">Tooltip</Link>
        </div>
        <div>
          <Link to="/forms">Form</Link>
        </div>
        <div>
          <Link to="/tags">Tag</Link>
        </div>
        <div>
          <Link to="/badges">Badges</Link>
        </div>
        <div>
          <Link to="/typography">Typography</Link>
        </div>
        <div>
          <Link to="/flexbox">Flexbox Grid</Link>
        </div>
        <div>
          <Link to="/boxes">Box</Link>
        </div>
        <div>
          <Link to="/messages">Message</Link>
        </div>
        <div>
          <Link to="/progressBars">Progress Bar</Link>
        </div>
      </div>
    );
  }
}

export default Demo;