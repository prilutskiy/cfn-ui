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
      <div class="toast-countdown" />
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

  _insertToastIntoDom = ($toast) => {
    $('.toast').each((i, el) => {
      const $el = $(el);
      const currentPosition = parseInt($el.css('bottom'));
      $el.css('bottom', `${currentPosition + 60 + 2}px`)
    })
    $('.app > .app-content').prepend($toast);
  }

  _showToast = ($toast) => {
    const timeout = 5;
    const currentPosition = parseInt($toast.css('bottom'));
    $toast.css('bottom', `${currentPosition + 60}px`).css('opacity', '1');
  }

  _handleClosing = ($toast) => {
    const closeButton = $toast.find('[role="close"]');
    closeButton.on('click', () => {
      const currentPosition = parseInt($toast.css('bottom'));
      $toast.css('opacity', '0');
      $toast.nextAll('.toast').each((i, el) => {
        const $el = $(el);
        const currentSiblingPosition = parseInt($el.css('bottom'));
        $el.css('bottom', `${currentSiblingPosition - 62}px`);
      });
      setTimeout(() => {
        $toast.remove();
        $toast.find('[role="close"]').trigger('click');
      }, 350)
    });
  }

  _removeRedundant = (treshold) => {
    const allToasts = $('.toast');
    allToasts.each((i, el) => {
      if (i >= treshold) {
        $(el).find('[role="close"]').trigger('click');
      }
    })
  }

  _setupDestruction = ($toast, timeout) => {
    const $countdown = $toast.find('.toast-countdown');

    $countdown.css('width', '100%');
    $countdown.css('transition', `width ${timeout}s linear`);
    $countdown.css('width', '0%');

    let timerId = setTimeout(() => {
      $toast.find('[role="close"]').trigger('click');
    }, timeout * 1000);

    $toast.on('mouseenter', () => {
      $toast.off('mouseleave');
      console.log('hover');
      clearTimeout(timerId);
      $countdown.css('visibility', 'hidden');
      $countdown.css('transition', `width .01s linear`);
      $countdown.css('width', '100%');
      $countdown.css('transition', `width 1s linear`);
      $toast.on('mouseleave', () => {
        $countdown.css('visibility', 'visible');
        $countdown.css('width', '0%');
        timerId = setTimeout(() => {
          $toast.find('[role="close"]').trigger('click');
        }, 1000);
      })
    });
  }

  showToast = () => {
    const element = this._createToast('check', 'Action successfuly completed');
    this._insertToastIntoDom(element);
    this._handleClosing(element);
    this._showToast(element);
    this._setupDestruction(element, 5);
    this._removeRedundant(3);
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
