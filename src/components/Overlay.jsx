import React, { Component } from 'react';

class Overlay extends Component {
  constructor(props) {
    super(props);
  }

  _stopPropagation = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  render() {
    return (
      <div 
        onWheel={ this._stopPropagation } 
        className={`overlay overlay-${this.props.inverted?'inverted':'default'} ${this.props.page?'overlay-page':''} ${this.props.show?'':'hidden'}`} 
      />
    );
  }
}

export default Overlay;