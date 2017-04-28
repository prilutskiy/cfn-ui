import React, { Component } from 'react';
import { TabContainer } from './../library';

class TabsDemo extends Component {
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