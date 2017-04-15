import React, { Component } from 'react';
import Button from './../components/Button';
import DropdownMenu from './../components/DropdownMenu';

class DropdownDemo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const dropdownTrigger = <Button>Dropdown <i className="fa fa-caret-down"></i></Button>;
    return (
      <div>
        <DropdownMenu trigger={dropdownTrigger}>
          <DropdownMenu.Item>
            <i className="fa fa-user" />
            My Personal profile
            </DropdownMenu.Item>
          <DropdownMenu.Item>
            <i className="fa fa-sliders" />
            Account settings
            </DropdownMenu.Item>
          <DropdownMenu.Item divider />
          <DropdownMenu.Item>
            <i className="fa fa-power-off" />
            Exit
            </DropdownMenu.Item>
        </DropdownMenu>
      </div>
    );
  }
}

export default DropdownDemo;