import React, { Component } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import DropdownMenu from './components/DropdownMenu';
import Select from './components/Select';
import Checkbox from './components/Checkbox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      values: null,
      checked: false
    }
    this.handlSelectChange = (options) => this.setState({values: options});
    this.onCheck = this.onCheck.bind(this);
  }

  onCheck(newValue) {
    this.setState({ checked: newValue });
  }

  render() {
    const dropdownTrigger = <Button>Dropdown <i className="fa fa-caret-down"></i></Button>;
    return (
      <div className="App" style={{ textAlign: 'center' }}>
        {this.props.children}
      </div>
    );
  }
  onClick() {
    this.setState({ isLoading: true });
    setTimeout(() => this.setState({ isLoading: false }), 1000);
  }
}

export default App;
