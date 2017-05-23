import React, { Component } from 'react';
import { TabBar, App, Navbar, DropdownMenu, Page } from './../library';
import { hashHistory } from 'react-router';

class TabBarDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 2
    }
  }

  onTabClick(i) {
    this.setState({ tab: i });
  }

  render() {
    const profileBtn = (
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch' }}>
        <img className="img-circle img-sm" alt="" src="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" />
        <span style={{ padding: '0 15px' }}></span>
        <i className="fa fa-caret-down" />
      </div>
    );
    return (
      <App fixednav fixedfooter>
        <App.Navigation>
          <Navbar logo="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" title="Haze UI" onClick={() => hashHistory.push('/')}>
            <Navbar.LeftMenu>
            </Navbar.LeftMenu>
            <Navbar.RightMenu>
              <Navbar.MenuItem>
                <DropdownMenu trigger={profileBtn}>
                  <DropdownMenu.Item><i className="fa fa-user" /> My Profile</DropdownMenu.Item>
                  <DropdownMenu.Item><i className="fa fa-sliders" />Settings</DropdownMenu.Item>
                  <DropdownMenu.Item divider />
                  <DropdownMenu.Item><i className="fa fa-power-off" />Exit</DropdownMenu.Item>
                </DropdownMenu>
              </Navbar.MenuItem>
            </Navbar.RightMenu>
          </Navbar>
        </App.Navigation>
        <App.Content>
          <Page>
            {this.props.children}
          </Page>
        </App.Content>
        <App.Footer>
          <TabBar danger>
            <TabBar.Item active={this.state.tab === 0} onClick={() => this.onTabClick(0)} icon="flask" title="Experiments" />
            <TabBar.Item active={this.state.tab === 1} onClick={() => this.onTabClick(1)} icon="trophy" title="Trophies" />
            <TabBar.Item active={this.state.tab === 2} onClick={() => this.onTabClick(2)} icon="music" title="Music" />
            <TabBar.Item active={this.state.tab === 3} onClick={() => this.onTabClick(3)} icon="sliders" title="Settings" />
            <TabBar.Item active={this.state.tab === 4} onClick={() => this.onTabClick(4)} icon="ellipsis-h" title="More" />
          </TabBar>
        </App.Footer>
      </App>
    );
  }
}

export default TabBarDemo;