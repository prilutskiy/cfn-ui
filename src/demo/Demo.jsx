import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      </div>
    );
  }
}

export default Demo;