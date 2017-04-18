import React, { Component } from 'react';

class Overlay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'overlay overlay-inverted' + (this.props.show?' ':'hidden ')} />
    );
  }
}

export default Overlay;