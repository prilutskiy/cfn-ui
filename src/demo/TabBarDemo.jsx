import React, { Component } from 'react';
import { TabBar } from './../library';

class TabBarDemo extends Component {
  constructor(props) {
    super(props);
    this.state={
      tab: 2
    }
  }

  onTabClick(i) {
    this.setState({tab: i});
  }

  render() {
    return (
      <TabBar danger>
        <TabBar.Item active={this.state.tab===0} onClick={() => this.onTabClick(0)} icon="flask" title="Experiments" />
        <TabBar.Item active={this.state.tab===1} onClick={() => this.onTabClick(1)} icon="trophy" title="Trophies" />
        <TabBar.Item active={this.state.tab===2} onClick={() => this.onTabClick(2)} icon="music" title="Music" />
        <TabBar.Item active={this.state.tab===3} onClick={() => this.onTabClick(3)} icon="sliders" title="Settings" />
        <TabBar.Item active={this.state.tab===4} onClick={() => this.onTabClick(4)} icon="ellipsis-h" title="More" />
      </TabBar>
    );
  }
}

export default TabBarDemo;