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
          <Input disabled type="password" info icon="key" placeholder="Enter your password" />
          <Button primary>Button</Button>
        </div>
        <div>
          <Input lg type="password" primary icon="key" placeholder="Enter your password" />
          <Button lg primary>Button</Button>
        </div>
        <div>
          <Input xl type="password" success icon="key" placeholder="Enter your password" />
          <Button xl primary>Button</Button>
        </div>
        <div>
          <Select primary value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={[
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' }
          ]} />
          <Button primary>Button</Button>
        </div>
        <div>
          <Select primary icon="building" value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={[
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' }
          ]} />
          <Button primary>Button</Button>
        </div>
        <div>
          <Select primary multi value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={[
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' }
          ]} />
          <Button primary>Button</Button>
        </div>
        <div>
          <Select primary multi icon="building" value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={[
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' }
          ]} />
          <Button primary>Button</Button>
        </div>
        <div>
          <Checkbox label="A" onChange={(v) => this.onCheck(v)}/>
          <Checkbox label="B" success value={this.state.checked} onChange={(v) => this.onCheck(v)}/>
          <Checkbox label="C" info value={this.state.checked} onChange={(v) => this.onCheck(v)}/>
          <Checkbox label="D" warning value={this.state.checked} onChange={(v) => this.onCheck(v)}/>
          <Checkbox label="E" danger value={this.state.checked} onChange={(v) => this.onCheck(v)}/>
        </div>
        <div>
          <Checkbox label="F" primary disabled value={this.state.checked} onChange={(v) => this.onCheck(v)}/>
          <Checkbox label="G" success disabled value={this.state.checked} onChange={(v) => this.onCheck(v)}/>
          <Checkbox label="H" info disabled value={this.state.checked} onChange={(v) => this.onCheck(v)}/>
          <Checkbox label="I" warning disabled value={this.state.checked} onChange={(v) => this.onCheck(v)}/>
          <Checkbox label="J" danger disabled value={this.state.checked} onChange={(v) => this.onCheck(v)}/>
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
