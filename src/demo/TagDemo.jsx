import React, { Component } from 'react';
import { Tag } from './../library';

class TagDemo extends Component {
  render() {
    return (
      <div>
        <div>
          <Tag icon="times">Remove tag</Tag>
          <Tag icon="plus">Add tag</Tag>
          <Tag disabled>Disabled tag</Tag>
        </div>
        <div>
          <Tag primary icon="times">Remove tag</Tag>
          <Tag primary icon="plus">Add tag</Tag>
          <Tag primary disabled>Disabled tag</Tag>
        </div>
        <div>
          <Tag success icon="times">Remove tag</Tag>
          <Tag success icon="plus">Add tag</Tag>
          <Tag success disabled>Disabled tag</Tag>
        </div>
        <div>
          <Tag info icon="times">Remove tag</Tag>
          <Tag info icon="plus">Add tag</Tag>
          <Tag info disabled>Disabled tag</Tag>
        </div>
        <div>
          <Tag warning icon="times">Remove tag</Tag>
          <Tag warning icon="plus">Add tag</Tag>
          <Tag warning disabled>Disabled tag</Tag>
        </div>
        <div>
          <Tag danger icon="times">Remove tag</Tag>
          <Tag danger icon="plus">Add tag</Tag>
          <Tag danger disabled>Disabled tag</Tag>
        </div>
      </div>
    );
  }
}

export default TagDemo;