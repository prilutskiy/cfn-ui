import React, { Component } from 'react';

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-container app-container-boxed">
        {this.props.children}
      </div>
    );
  }
}

export default AppContainer;