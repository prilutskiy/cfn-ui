import React, { Component } from 'react';
import { Input, Button, Box } from './../library';

class InputDemo extends Component {
  render() {
    return (
      <div>
        <Box>
          <Box.Header>Inputs</Box.Header>
          <Box.Content>
            <div>
              <Input placeholder="Username" type="text" icon="user" />
              <Button primary>Action</Button>
              <Button primary clean>Reset</Button>
            </div>
            <div>
              <Input placeholder="Password" type="password" icon="key"/>
              <Button primary>Action</Button>
              <Button primary clean>Reset</Button>
            </div>
            <div>
              <Input success placeholder="Text here"/>
              <Input danger disabled highlighted placeholder="Password" type="password" icon="key"/>
            </div>
          </Box.Content>
        </Box>
      </div>
    );
  }
}

export default InputDemo;