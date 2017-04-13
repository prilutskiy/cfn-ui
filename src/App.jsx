import React, { Component } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import DropdownMenu from './components/DropdownMenu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
  }

  render() {
    const dropdownTrigger = <Button>Dropdown <i className="fa fa-caret-down"></i></Button>;
    return (
      <div className="App" style={{ textAlign: 'center' }}>
        <div>
          <Button xs >Button</Button>
          <Button link loading>Button</Button>
          <Button danger xs disabled>Button</Button>
          <Button success sm outline>Button</Button>
          <Button info>Button</Button>
          <Button warning lg>Button</Button>
          <Button primary xl>Button</Button>
        </div>
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
        <div>
          <Input xs type="password" icon="key" placeholder="Enter your password" />
        </div>
        <div>
          <Input sm warning type="password" icon="key" placeholder="Enter your password" />
          <Button sm primary>Button</Button>
        </div>
        <div>
          <Input type="password" info icon="key" placeholder="Enter your password" />
          <Button primary>Button</Button>
        </div>
        <div>
          <Input lg type="password" primary  icon="key" placeholder="Enter your password" />
          <Button lg primary>Button</Button>
        </div>
        <div>
          <Input xl type="password" success icon="key" placeholder="Enter your password" />
          <Button xl primary>Button</Button>
        </div>
      </div>
    );
  }
  onClick() {
    this.setState({ isLoading: true });
    setTimeout(() => this.setState({ isLoading: false }), 1000);
  }
}

export default App;
