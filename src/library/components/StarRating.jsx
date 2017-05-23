import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      hoverIndex: null
    }
  }

  get value() {
    return this.isControlled ? this.props.value : this.state.value;
  }

  onStarHover(i) {
    this.setState({ hoverIndex: i })
  }

  onStarClick() {
    if (this.isControlled) {
      const handler = this.props.onChange || (() => { });
      handler(this.state.hoverIndex + 1);
    } else {
      this.setState({ value: this.state.hoverIndex + 1 })
    }
  }

  onStarLeave() {
    this.setState({
      hoverIndex: this.value - 1
    })
  }

  get isControlled() {
    return this.props.value !== undefined;
  }

  render() {
    const style = {
      color: this.props.color,
      padding: '3px'
    }
    return (
      <span onMouseLeave={() => this.onStarLeave()} className="clickable star-rating" onClick={() => this.onStarClick()}>
        {
          Array(this.props.count).fill(0).map((_, i) => {
            return (
              (this.state.hoverIndex != null && this.state.hoverIndex >= i) ||
                (this.value != null && this.value > i) ?
                <i style={style} key={i} className="fa fa-star" onMouseEnter={() => this.onStarHover(i)} /> :
                <i style={style} key={i} className="fa fa-star-o" onMouseEnter={() => this.onStarHover(i)} />
            );
          })
        }
      </span>
    );
  }
}

StarRating.propTypes = {
  count: PropTypes.number.isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func,
  color: PropTypes.string
};

StarRating.defaultProps = {
  count: 5,
  color: 'gold'
};

export default StarRating;