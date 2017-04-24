import React, { Component } from 'react';
import Select from './../components/Select';
import Button from './../components/Button';
import Box from './../components/Box';

class SelectDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: null
    }
    this.handlSelectChange = (options) => this.setState({ values: options });
    this.options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' }
    ];
  }

  render() {
    return (
      <div>
        <Box>
          <Box.Header>Selects</Box.Header>
          <Box.Content>
            <div>
              <Select options={this.options} value={this.state.values} onChange={v => this.setState({values: v})} placeholder="Username" type="text" icon="user" />
              <Button primary>Action</Button>
              <Button primary clean>Reset</Button>
            </div>
            <div>
              <Select primary multi options={this.options} value={this.state.values} onChange={v => this.setState({values: v})}  placeholder="Password" />
              <Button primary>Action</Button>
              <Button primary clean>Reset</Button>
            </div>
            <div>
              <Select success highlighted options={this.options} value={this.state.values} onChange={v => this.setState({values: v})} placeholder="Text here" />
              <Select danger disabled highlighted placeholder="Password" type="password" icon="key" />
            </div>
          </Box.Content>
        </Box>
      </div>
    );
  }
}

export default SelectDemo;