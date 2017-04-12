import React, { Component, PropTypes } from 'react';
/* global $ */

class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    this.dropdown;
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  close(e) {
    $(this.dropdown).find('.dropdown-menu').addClass('hidden');
    $(window).off('click', this.close);
  }

  open(e) {
    $(this.dropdown).find('.dropdown-menu').removeClass('hidden');
    $(window).on('click', this.close);
  }

  onClick(e) {
    e.preventDefault();
    e.stopPropagation();
    $(window).on('click', this.close);
    const dropdownMenu = $(this.dropdown).find('.dropdown-menu');
    if (dropdownMenu.hasClass('hidden')) {
      this.open(e);
    } else {
      this.close(e);
    }
  }

  render() {
    return (
      <span className="dropdown" onClick={!this.props.trigger.props.disabled ? this.onClick : null} ref={(r) => this.dropdown = r}>
        <div className="dropdown-trigger">
          {this.props.trigger}
        </div>
        {
          React.Children.count(this.props.children)
            ?
            <div className="dropdown-menu hidden">
              {this.props.children}
            </div>
            :
            null
        }

      </span>
    );
  }
}

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { className, children, divider, ...otherProps } = this.props;
    return (
      divider
        ?
        <div className="dropdown-divider" />
        :
        <div className={"dropdown-item " + className} {...otherProps}>
          {children}
        </div>
    );
  }
}

DropdownMenu.propTypes = {
  trigger: PropTypes.any,
  children: (props, propName, componentName) =>
    React.Children
      .toArray(props[propName])
      .find(child => child.type !== Item) && new Error(`${componentName} only accepts "<DropdownMenu.Item />" elements`),
};

DropdownMenu.Item = Item;

export default DropdownMenu;