import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Row, Col, App, Navbar, Footer, DropdownMenu, Header, Button, Alert, Modal, Fly, Toast, Page, SideMenu } from './library';

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
      title: 'Are you sure ?',
      text: 'This action cannot be undone',
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
      timeout: 5
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
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch' }}>
        <img className="img-circle img-sm" alt="" src="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" />
        <span style={{ padding: '0 15px' }}>John Doe</span>
        <i className="fa fa-caret-down" />
      </div>
    );
    return (
      <div>
        <App fixednav fixedfooter boxed>
          <App.Navigation>
            <Navbar logo="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" title="Haze UI" onClick={ () => hashHistory.push('/') }>
              <Navbar.LeftMenu>
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
            <SideMenu show={this.state.menu} onClose={() => this.setState({menu: false})} brand="Haze UI" logo="/bg.png">
              <SideMenu.Item href="/" onClick={ () => hashHistory.push('/') }>
                Go Home
              </SideMenu.Item>
            </SideMenu>
          </App.Footer>
        </App>
      </div>
    );
  }
}

export default DemoApp;
