import React, { Component } from 'react';
import { Checkbox } from './../library';

class CheckboxDemo extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <Checkbox label="Default" />
            <Checkbox label="Primary" primary />
            <Checkbox label="Success" success />
            <Checkbox label="Info" info />
            <Checkbox label="Warning" warning />
            <Checkbox label="Danger" danger />
          </div>
          <div>
            <Checkbox disabled label="Default" />
            <Checkbox disabled label="Primary" primary />
            <Checkbox disabled label="Success" success />
            <Checkbox disabled label="Info" info />
            <Checkbox disabled label="Warning" warning />
            <Checkbox disabled label="Danger" danger />
          </div>
        </div>
      </div>
    );
  }
}

export default CheckboxDemo;