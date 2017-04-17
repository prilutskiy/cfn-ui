import React, { Component } from 'react';
import Tag from './../components/Tag';

class TagDemo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Tag removable>Removable tag</Tag>
          <Tag>Unremovable tag</Tag>
          <Tag disabled>Unremovable tag</Tag>
        </div>
        <div>
          <Tag primary  removable>Removable tag</Tag>
          <Tag primary >Unremovable tag</Tag>
          <Tag primary disabled>Unremovable tag</Tag>
        </div>
        <div>
          <Tag success removable>Removable tag</Tag>
          <Tag success>Unremovable tag</Tag>
          <Tag success disabled>Unremovable tag</Tag>
        </div>
        <div>
          <Tag info removable>Removable tag</Tag>
          <Tag info>Unremovable tag</Tag>
          <Tag info disabled>Unremovable tag</Tag>
        </div>
        <div>
          <Tag warning removable>Removable tag</Tag>
          <Tag warning>Unremovable tag</Tag>
          <Tag warning disabled>Unremovable tag</Tag>
        </div>
        <div>
          <Tag danger removable>Removable tag</Tag>
          <Tag danger>Unremovable tag</Tag>
          <Tag danger disabled>Unremovable tag</Tag>
        </div>
      </div>
    );
  }
}

export default TagDemo;