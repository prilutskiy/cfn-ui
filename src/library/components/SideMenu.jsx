import React, { Component } from 'react';

class SideMenu extends Component {
  getClassSet = () => {
    const sidemenu = 'sidemenu';
    const opened = this.props.show ? 'sidemenu-opened' : '';

    return [
      sidemenu,
      opened
    ]
      .filter(c => c)
      .join(' ');
  }

  render() {
    return (
      <div>
        <div className={'overlay overlay-page overlay-default ' + (this.props.show ? 'overlay-opened' : '')} onClick={this.props.onClose}>
        </div>
        <div className={this.getClassSet()}>
          <div className="sidemenu-header">
            <div className="sidemenu-brand">
              <img className="sidemenu-brand-logo" src="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" alt="" />
              <h4 className="sidemenu-brand-title">
                Brand
            </h4>
            </div>
            <div className="sidemenu-dismiss" onClick={this.props.onClose}>
              <i className="fa fa-times" />
            </div>
          </div>
          <div className="sidemenu-list">
            <div className="sidemenu-list-item">First Link</div>
            <div className="sidemenu-list-item">Second Link</div>
            <div className="sidemenu-list-item">Third Link</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideMenu;