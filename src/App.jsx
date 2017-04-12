import React, { Component } from 'react';
import Button from './components/Button';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false
    }
  }
  render() {
    return (
      <div className="App" style={{ textAlign:'center' }}>
        <div>
        <Button>Button</Button>
        <Button primary><i className="fa fa-check"></i> Button</Button>
        <Button success>Button</Button>
        <Button info>Button</Button>
        <Button warning>Button</Button>
        <Button danger>Button</Button>
        <Button link>Button</Button>
        </div>
        <div>
        <Button disabled>Button</Button>
        <Button disabled primary><i className="fa fa-check"></i> Button</Button>
        <Button disabled success>Button</Button>
        <Button disabled info>Button</Button>
        <Button disabled warning>Button</Button>
        <Button disabled danger>Button</Button>
        <Button disabled link>Button</Button>
        </div>
        <div>
        <Button loading>Button</Button>
        <Button loading primary><i className="fa fa-check"></i> Button</Button>
        <Button loading success>Button</Button>
        <Button loading info>Button</Button>
        <Button loading warning>Button</Button>
        <Button loading danger>Button</Button>
        <Button loading link>Button</Button>
        </div>

        <div>
        <Button outline>Button</Button>
        <Button outline primary>Button</Button>
        <Button outline success>Button</Button>
        <Button outline info>Button</Button>
        <Button outline warning>Button</Button>
        <Button outline danger>Button</Button>
        <Button outline link>Button</Button>
        </div>
        <div>
        <Button disabled outline>Button</Button>
        <Button disabled outline primary>Button</Button>
        <Button disabled outline success>Button</Button>
        <Button disabled outline info>Button</Button>
        <Button disabled outline warning>Button</Button>
        <Button disabled outline danger>Button</Button>
        <Button disabled outline link>Button</Button>
        </div>
        <div>
        <Button loading outline>Button</Button>
        <Button loading outline primary>Button</Button>
        <Button loading outline success>Button</Button>
        <Button loading outline info>Button</Button>
        <Button loading outline warning>Button</Button>
        <Button loading outline danger>Button</Button>
        <Button loading outline link>Button</Button>
        </div>

        <div>
        <Button primary xs loading>Button</Button>
        <Button primary sm loading>Button</Button>
        <Button primary loading>Button</Button>
        <Button primary lg loading>Button</Button>
        <Button primary xl loading>Button</Button>
        </div>

        <div>
        <Button loading>Button</Button>
        <Button block>Button</Button>
        <Button primary lg loading={this.state.isLoading} onClick={() => this.onClick()}>Button</Button>
        </div>
      </div>
    );
  }
  onClick() {
    this.setState({isLoading: true});
    setTimeout(() => this.setState({isLoading: false}), 1000);
  }
}

export default App;
