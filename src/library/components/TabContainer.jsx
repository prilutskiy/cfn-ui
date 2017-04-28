import React, { Component } from 'react';

class Tab extends Component {
  render = () => <div>{this.props.children}</div>
}

class TabContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: 0
    };
    this.styleMap = {
      default: 'tab-container-default',
      primary: 'tab-container-primary',
      success: 'tab-container-success',
      info: 'tab-container-info',
      warning: 'tab-container-warning',
      danger: 'tab-container-danger',
    }
    this.orientationMap = {
      top: 'tab-container-top',
      right: 'tab-container-right',
      bottom: 'tab-container-bottom',
      left: 'tab-container-left',
    }
    this.getClassSet = this.getClassSet.bind(this);
    this.getStyleClass = this.getStyleClass.bind(this);
    this.getOrientationClass = this.getOrientationClass.bind(this);
  }

  getOrientationClass() {
    return Object.keys(this.orientationMap).filter(s => this.props[s]).map(n => this.orientationMap[n])[0] || this.orientationMap.top;
  }

  getStyleClass() {
    return Object.keys(this.styleMap).filter(s => this.props[s]).map(n => this.styleMap[n])[0] || this.styleMap.default;
  }

  getClassSet() {
    const tabContainer= 'tab-container';
    const style = this.getStyleClass();
    const orientation = this.getOrientationClass();

    return [
      tabContainer,
      style,
      orientation
    ]
      .filter(_ => _)
      .join(' ');
  }

  get isControlled() {
    return this.props.activeTabIndex != null;
  }

  onTabClick = (tab, index) => {
    if (this.isControlled) {
      const onTabChange = this.props.onChange || (()=>{});
      onTabChange(index, tab.props);
    } else {
      this.setState({ activeTabIndex: index });
    }
  }

  render() {
    const activeTabIndex = this.isControlled ? this.props.activeTabIndex : this.state.activeTabIndex;
    return (
      <div className={this.getClassSet()}>
        <div className="tab-header">
          {
            React.Children.map(this.props.children, (c, i) => {
              return (
                <div key={i} className={`tab-header-tab ${activeTabIndex===i?'active':''}`} onClick={() => this.onTabClick(c, i)}>
                  {c.props.title}
                </div> 
              );
            })
          }
        </div>
        <div className="tab-content">
          <div className="tab-content-tab">
            {              
              activeTabIndex > -1 && activeTabIndex < this.props.children.length
              ?
              React.Children.toArray(this.props.children).filter(c => c.type === Tab)[activeTabIndex]
              :
              null
            }
          </div>
        </div>
      </div>
    );
  }
}

TabContainer.propTypes = {
  children : (props, propName, componentName) => 
                React.Children
                  .toArray(props[propName])
                  .find(child => child.type !== Tab) && new Error(`${componentName} only accepts "<${componentName}.Tab />" elements`),
};

TabContainer.Tab = Tab;

export default TabContainer;