import React, { Component } from 'react';
import { Stories } from './../library';
import { browserHistory } from 'react-router';

class StoriesDemo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Stories>
          <Stories.Story onClick={() => browserHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="One"/>
          <Stories.Story onClick={() => browserHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Two"/>
          <Stories.Story onClick={() => browserHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Very long story Title will hide behind ellipses"/>
          <Stories.Story onClick={() => browserHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="One"/>
          <Stories.Story onClick={() => browserHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Two"/>
          <Stories.Story onClick={() => browserHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Three"/>
          <Stories.Story onClick={() => browserHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="One"/>
          <Stories.Story onClick={() => browserHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Two"/>
          <Stories.Story onClick={() => browserHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Three"/>
          <Stories.Story onClick={() => browserHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="One"/>
          <Stories.Story onClick={() => browserHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Two"/>
          <Stories.Story onClick={() => browserHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Three"/>
          <Stories.Story onClick={() => browserHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="One"/>
          <Stories.Story onClick={() => browserHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Two"/>
          <Stories.Story onClick={() => browserHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Three"/>
          <Stories.Story onClick={() => browserHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="One"/>
          <Stories.Story onClick={() => browserHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Two"/>
          <Stories.Story onClick={() => browserHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Three"/>
          <Stories.Story onClick={() => browserHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="One"/>
          <Stories.Story onClick={() => browserHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Two"/>
          <Stories.Story onClick={() => browserHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Three"/>
        </Stories>
      </div>
    );
  }
}

export default StoriesDemo;