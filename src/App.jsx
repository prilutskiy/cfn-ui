import React, { Component } from 'react';
import AppContainer from './components/AppContainer';
import Navbar from './components/Navbar';
import DropdownMenu from './components/DropdownMenu';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    const profileBtn = (
    <div className="text-inverted" style={{display:'flex', flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch'}}>
      <img className="img-circle img-sm" src="http://dev.cafein.by/static/img/shattered.png" /> 
      <span style={{ padding: '0 15px'}}>John Doe</span>
      <i className="fa fa-caret-down" />
    </div>
    );
    return (
      <AppContainer>
        <Navbar>
          <Navbar.BrandLogo>
            <img src="http://dev.cafein.by/static/img/shattered.png" />
          </Navbar.BrandLogo>
          <Navbar.BrandTitle>
            <Link to="/">Brand</Link>
          </Navbar.BrandTitle>
          <Navbar.LeftMenu>
            <Navbar.MenuItem>First</Navbar.MenuItem>
            <Navbar.MenuItem>Second</Navbar.MenuItem>
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
        {this.props.children}
      </AppContainer>
    );
  }
}

export default App;
