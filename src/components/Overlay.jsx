import React, { Component } from 'react';

class Overlay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`overlay overlay-${this.props.inverted?'inverted':'default'} ${this.props.page?'overlay-page':''} ${this.props.show?'':'hidden'}`} />
    );
  }
}

export default Overlay;