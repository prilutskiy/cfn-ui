import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Breadcrumbs from './Breadcrumbs';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <Breadcrumbs>
          <Breadcrumbs.Crumb path="/" title="Home" />
          <Breadcrumbs.Crumb path="/" title="Page" />
          <Breadcrumbs.Crumb path="/" title="Details" />
        </Breadcrumbs>
        <div className="header-title">
          <h2 className="header-title-primary">Cfn UI Components Demo</h2>
          <h5 className="header-title-secondary">Use links below to navigate between components</h5>
        </div>
      </div>
    );
  }
}

export default Header;
