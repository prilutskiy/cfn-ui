import React, { Component } from 'react';
import { TabContainer, Page } from './../library';

class TabsDemo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <TabContainer top primary>
          <TabContainer.Tab title="First">First tab content</TabContainer.Tab>
          <TabContainer.Tab title="Second">Second tab content</TabContainer.Tab>
          <TabContainer.Tab title="Third">Third tab content</TabContainer.Tab>
        </TabContainer>
    );
  }
}

export default TabsDemo;