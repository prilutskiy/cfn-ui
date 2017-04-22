import React, { Component } from 'react';
import Stories from './../components/Stories';

class StoriesDemo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Stories>
          <Stories.Story image="/bg.png" href="/" title="One"/>
          <Stories.Story image="/bg.png" href="/" title="Two"/>
          <Stories.Story image="/bg.png" href="/" title="Very long story Title will hide behind ellipses"/>
          <Stories.Story image="/bg.png" href="/" title="One"/>
          <Stories.Story image="/bg.png" href="/" title="Two"/>
          <Stories.Story image="/bg.png" href="/" title="Three"/>
          <Stories.Story image="/bg.png" href="/" title="One"/>
          <Stories.Story image="/bg.png" href="/" title="Two"/>
          <Stories.Story image="/bg.png" href="/" title="Three"/>
          <Stories.Story image="/bg.png" href="/" title="One"/>
          <Stories.Story image="/bg.png" href="/" title="Two"/>
          <Stories.Story image="/bg.png" href="/" title="Three"/>
          <Stories.Story image="/bg.png" href="/" title="One"/>
          <Stories.Story image="/bg.png" href="/" title="Two"/>
          <Stories.Story image="/bg.png" href="/" title="Three"/>
          <Stories.Story image="/bg.png" href="/" title="One"/>
          <Stories.Story image="/bg.png" href="/" title="Two"/>
          <Stories.Story image="/bg.png" href="/" title="Three"/>
          <Stories.Story image="/bg.png" href="/" title="One"/>
          <Stories.Story image="/bg.png" href="/" title="Two"/>
          <Stories.Story image="/bg.png" href="/" title="Three"/>
        </Stories>
      </div>
    );
  }
}

export default StoriesDemo;