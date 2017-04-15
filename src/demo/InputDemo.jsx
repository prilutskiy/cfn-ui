import React, { Component } from 'react';
import Input from './../components/Input';

class InputDemo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Input xs type="password" icon="key" placeholder="Password" />
        </div>
        <div>
          <Input sm type="password" icon="key" placeholder="Password" />
        </div>
        <div>
          <Input md type="password" icon="key" placeholder="Password" />
        </div>
        <div>
          <Input lg type="password" icon="key" placeholder="Password" />
        </div>
        <div>
          <Input xl type="password" icon="key" placeholder="Password" />
        </div>
        <div>
          <Input default placeholder="Some text" />
        </div>
        <div>
          <Input disabled primary icon="user" placeholder="Some text" />
        </div>
        <div>
          <Input success icon="building" placeholder="Some text" />
        </div>
        <div>
          <Input info icon="check" placeholder="Some text" />
        </div>
        <div>
          <Input warning icon="key" placeholder="Some text" />
        </div>
        <div>
          <Input danger icon="lock" placeholder="Some text" />
        </div>
      </div>
    );
  }
}

export default InputDemo;