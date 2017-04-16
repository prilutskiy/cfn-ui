import React, { Component } from 'react';
import Tag from './../components/Tag';

class TagDemo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Tag removable>Removable tag</Tag>
        <Tag>Removable tag</Tag>
      </div>
    );
  }
}

export default TagDemo;