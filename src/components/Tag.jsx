import React, { Component } from 'react';

class Tag extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tag">
        {this.props.removable ? <i className="fa fa-times" /> : null }
        {this.props.children}
      </div>
    );
  }
}

export default Tag;