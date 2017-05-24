import React, { Component } from 'react';
import { TabSwitch, Row, Col } from './../library';

class TabSwitchDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    }
  }

  onChange(i) {
    this.setState({ activeIndex: i });
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={12} sm={4}>
            <TabSwitch primary>
              <TabSwitch.Item onClick={() => this.onChange(0)} active={this.state.activeIndex === 0}>Today</TabSwitch.Item>
              <TabSwitch.Item onClick={() => this.onChange(1)} active={this.state.activeIndex === 1}>This week</TabSwitch.Item>
              <TabSwitch.Item onClick={() => this.onChange(2)} active={this.state.activeIndex === 2}>Last week</TabSwitch.Item>
              <TabSwitch.Item onClick={() => this.onChange(3)} active={this.state.activeIndex === 3}>This month</TabSwitch.Item>
              <TabSwitch.Item onClick={() => this.onChange(4)} active={this.state.activeIndex === 4}>This Year</TabSwitch.Item>
            </TabSwitch>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TabSwitchDemo;