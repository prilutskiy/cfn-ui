import React, { Component } from 'react';
import { Stories } from './../library';

class StoriesDemo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Stories>
          <Stories.Story image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="One"/>
          <Stories.Story image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Two"/>
          <Stories.Story image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Very long story Title will hide behind ellipses"/>
          <Stories.Story image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="One"/>
          <Stories.Story image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Two"/>
          <Stories.Story image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Three"/>
          <Stories.Story image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="One"/>
          <Stories.Story image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Two"/>
          <Stories.Story image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Three"/>
          <Stories.Story image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="One"/>
          <Stories.Story image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Two"/>
          <Stories.Story image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Three"/>
          <Stories.Story image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="One"/>
          <Stories.Story image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Two"/>
          <Stories.Story image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Three"/>
          <Stories.Story image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="One"/>
          <Stories.Story image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Two"/>
          <Stories.Story image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Three"/>
          <Stories.Story image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="One"/>
          <Stories.Story image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Two"/>
          <Stories.Story image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Three"/>
        </Stories>
      </div>
    );
  }
}

export default StoriesDemo;