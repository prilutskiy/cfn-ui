import React, { Component } from 'react';

class Overlay extends Component {

  _stopPropagation = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  render() {
    return (
      <div 
        onWheel={ this._stopPropagation } 
        className={`overlay overlay-opened overlay-${this.props.inverted?'inverted':'default'} ${this.props.page?'overlay-page':''} ${this.props.show?'':'hidden'}`} 
      />
    );
  }
}

export default Overlay;