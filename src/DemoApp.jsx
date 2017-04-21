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
/* global $ */

class DemoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      fly: false,
      toast: false,
    };
  }

  askForPermission = (onGrant, onDeny) => {
    this.alertref.open({
      title: 'Are you sure this is legal?',
      description: 'Because using refs is not recommended.',
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

  _createToast = (icon, message) => {
    const template = `
    <div class="toast">
      <div classNaclassme="toast-logo">
        <i class="fa fa-${icon}"></i>
      </div>
      <div class="toast-content">
        ${message}
      </div>
      <div class="toast-dismiss">
        <i role="close" class="fa fa-times"></i>
      </div>
    </div>
    `;
    const $toast = $(template);
    return $toast;
  }

  _setToastTimeout = ($toast, timeout) => {
    return setTimeout(() => {
      this._closeToast($toast);
    }, timeout * 1000);
  }

  _setTimer = ($toast, timeout) => {
    let timerId = this._setToastTimeout($toast, timeout);
    $toast.on('mouseenter', () => {
      console.log('mouseenter')
      clearTimeout(timerId);
    });
    $toast.on('mouseleave', () => {
      console.log('mouseleave')
      timerId = this._setToastTimeout($toast, timeout);
    });
  }

  _insertToastIntoDom = ($toast) => {
    $('.app > .app-content').prepend($toast);
    $toast.find('[role="close"]').on('click', () => {
      this._closeToast($toast);
    });
  }

  _showToast = ($toast) => {
    setTimeout(() => {
      $toast.addClass('toast-opened');
    }, 50);
  }

  _closeToast = ($toast, onClose) => {
    $toast.removeClass('toast-opened');
    setTimeout(() => {
      $toast.remove();
      onClose ? onClose() : null;
    }, 200);
  }

  showToast = () => {
    const timeout = 2;
    const element = this._createToast('check', 'Action successfuly completed');
    const currentToast = $('.toast');
    const _open = () => {
      this._insertToastIntoDom(element);
      this._showToast(element);
    };
    if (currentToast.length > 0) {
      this._closeToast(currentToast, _open);
    } else {
      _open();
    }
    this._setTimer(element, timeout);
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
          </App.Navigation>
          <App.Content>
            {/*<Toast show={this.state.toast} onClose={() => this.setState({toast: false})} />*/}
            <Fly show={this.state.fly} onClose={() => this.setState({ fly: false })} secondary />
            <Alert ref={r => this.alertref = r} />
            <Modal show={this.state.modal} success wide onCancel={() => this.setState({ modal: false })}>
              <Modal.Header>Modal Title</Modal.Header>
              <Modal.Content>
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
          </App.Content>
          <App.Footer>
            <Footer>
              <Row between="xs" middle="xs" >
                <Col>Change Language</Col>
                <Col>Settings</Col>
              </Row>
            </Footer>
          </App.Footer>
        </App>
      </div>
    );
  }
}

export default DemoApp;
