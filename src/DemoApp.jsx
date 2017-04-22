import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import App from './components/App';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DropdownMenu from './components/DropdownMenu';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Button from './components/Button';
import Alert from './components/Alert';
import Modal from './components/Modal';
import Fly from './components/Fly';
import Toast from './components/Toast';
import Page from './components/Page';
import SideMenu from './components/SideMenu';
/* global $ */

class DemoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      fly: false,
      toast: false,
      menu: false
    };
  }

  askForPermission = (onGrant, onDeny) => {
    Alert.show({
      title: 'Are you sure this is legal?',
      text: 'Because using refs is not recommended.',
      actions: [
        {
          text: 'No',
          style: 'danger',
          onClick: onDeny
        },
        {
          text: 'Yes',
          style: 'success',
          onClick: onGrant
        }
      ],
    });
  }

  showToast = () => {
    Toast.show({
      icon: 'check',
      text: 'Operation successful',
      style: 'success',
      timeout: 3
    });
  }

  showFly = () => {
    this.setState({ fly: true });
  }

  showModal = () => {
    this.setState({ modal: true });
  }

  showAlert = () => {
    this.askForPermission(
      () => {
        console.log('Permission granted');
      },
      () => {
        console.log('Permission Denied');
      })
  };

  render() {
    const profileBtn = (
      <div className="text-inverted" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch' }}>
        <img className="img-circle img-sm" src="/bg.png" />
        <span style={{ padding: '0 15px' }}>John Doe</span>
        <i className="fa fa-caret-down" />
      </div>
    );
    return (
      <div>
        <App fixednav fixedfooter boxed>
          <App.Navigation>
            <Navbar>
              <Navbar.BrandLogo>
                <img src="/bg.png" />
              </Navbar.BrandLogo>
              <Navbar.BrandTitle>
                <Link to="/">Brand</Link>
              </Navbar.BrandTitle>
              <Navbar.LeftMenu>
                <Navbar.MenuItem>First</Navbar.MenuItem>
                <Navbar.MenuItem onClick={() => this.setState({menu: !this.state.menu})}>Side Menu</Navbar.MenuItem>
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
              <Fly show={this.state.fly} onClose={() => this.setState({ fly: false })} secondary>
                <Fly.Header>Sky is the limit</Fly.Header>
                <Fly.Content>
                  Lorem ipsum
              </Fly.Content>
              </Fly>
              <Modal show={this.state.modal} success wide onCancel={() => this.setState({ modal: false })}>
                <Modal.Header>Modal Title</Modal.Header>
                <Modal.Content>
                  <Button primary onClick={() => this.showAlert()}>Alert from modal</Button>
                  <div style={{ height: '200px' }}></div>
                </Modal.Content>
              </Modal>
              <Header>
                <Header.PrimaryTitle>Components Demo</Header.PrimaryTitle>
                <Header.SubTitle>Use links below to navigate between components</Header.SubTitle>
                <Header.Actions>
                  <Button primary onClick={() => this.showToast()}><i className="fa fa-info"></i> Toast</Button>
                  <Button primary onClick={() => this.showFly()}><i className="fa fa-plane"></i> Fly</Button>
                  <Button primary onClick={() => this.showModal()}><i className="fa fa-window-maximize"></i> Modal</Button>
                  <Button primary onClick={() => this.showAlert()}><i className="fa fa-bell-o"></i> Alert</Button>
                </Header.Actions>
              </Header>
              {this.props.children}
            </Page>
          </App.Content>
          <App.Footer>
            <Footer>
              <Row between="xs" middle="xs" >
                <Col>Change Language</Col>
                <Col>Settings</Col>
              </Row>
            </Footer>
            <SideMenu show={this.state.menu} onClose={() => this.setState({menu: false})} />
          </App.Footer>
        </App>
      </div>
    );
  }
}

export default DemoApp;
