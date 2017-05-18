import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* global $ */

class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    this.dropdown = null;
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  close(e) {
    $(this.dropdown).find('.dropdown-menu').addClass('invisible');
    $(window).off('click', this.close);
  }

  open(e) {
    $('.dropdown-menu').addClass('invisible');
    $(this.dropdown).find('.dropdown-menu').removeClass('invisible');
    setTimeout(() => {
      $(window).on('click', this.close);
    }, 0);
  }

  onClick(e) {
    const dropdownMenu = $(this.dropdown).find('.dropdown-menu');
    if (dropdownMenu.hasClass('invisible')) {
      this.open(e);
    } else {
      this.close(e);
    }
  }

  render() {
    return (
      <span className={`dropdown ${this.props.up ? 'dropdown-up' : 'dropdown-down'}`} onClick={!this.props.trigger.props.disabled ? this.onClick : null} ref={(r) => this.dropdown = r}>
        <div className="dropdown-trigger">
          {this.props.trigger}
        </div>
        {
          React.Children.count(this.props.children)
            ?
            <div className="dropdown-menu invisible">
              <div className="dropdown-menu-pointer"/>
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
  render() {
    let { className, children, divider, ...otherProps } = this.props;
    return (
      divider
        ?
        <div className="dropdown-divider" />
        :
        <div className={"dropdown-item " + (className||'')} {...otherProps}>
          {children}
        </div>
    );
  }
}

DropdownMenu.propTypes = {
  trigger: PropTypes.element,
  children: (props, propName, componentName) =>
    React.Children
      .toArray(props[propName])
      .find(child => child.type !== Item) && new Error(`${componentName} only accepts "<DropdownMenu.Item />" elements`),
};

DropdownMenu.Item = Item;

export default DropdownMenu;