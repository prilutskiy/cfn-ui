import React, { Component } from 'react';
import { Grid, Row, Col, Button } from './../library';

class Demo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid>
          <br />
          <Row>
            <Col sm={3}>
              <Button default block href="/buttons"><img src="https://cdn0.iconfinder.com/data/icons/education-flat-square-icons-vol-2/96/61-128.png" /> Buttons</Button>
            </Col>
            <Col sm={3}>
              <Button default block href="/dropdowns"><img src="https://cdn1.iconfinder.com/data/icons/ui-for-web-and-mobile/512/Ui-17-128.png" /> Dropdowns</Button>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <Button default block href="/inputs"><img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/compose-128.png" /> Inputs</Button>
            </Col>
            <Col sm={3}>
              <Button default block href="/selects"><img src="https://cdn3.iconfinder.com/data/icons/ikooni-flat-online-shopping/128/shopping-08-128.png" /> Select controls</Button>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <Button default block href="/checkboxes"><img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/check-128.png" /> Checkboxes</Button>
            </Col>
            <Col sm={3}>
              <Button default block href="/toggleSwitches"><img src="https://cdn0.iconfinder.com/data/icons/user-interface-flat-icons/128/on-128.png" /> Toggle Switches</Button>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <Button default block href="/radioGroups"><img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/radio-128.png" /> Radio Groups</Button>
            </Col>
            <Col sm={3}>
              <Button default block href="/tooltips"><img src="https://cdn4.iconfinder.com/data/icons/flat-artistic-common-8/32/tip-128.png" /> Tooltips</Button>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <Button default block href="/forms"><img src="https://cdn3.iconfinder.com/data/icons/flat-office-icons-1/140/Artboard_1-7-128.png" /> Forms</Button>
            </Col>
            <Col sm={3}>
              <Button default block href="/tags"><img src="https://cdn4.iconfinder.com/data/icons/two-colored-flat-set/100/price-128.png" /> Tags</Button>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <Button default block href="/badges"><img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/ribbon-128.png" /> Badges</Button>
            </Col>
            <Col sm={3}>
              <Button default block href="/typography"><img src="https://cdn3.iconfinder.com/data/icons/flatastic-10-2/256/font-128.png" /> Typography</Button>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <Button default block href="/flexbox"><img src="https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Adaptive_design-128.png" /> Grid</Button>
            </Col>
            <Col sm={3}>
              <Button default block href="/boxes"><img src="https://cdn3.iconfinder.com/data/icons/forall/1062/window-128.png" /> Boxes</Button>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <Button default block href="/messages"><img src="https://cdn0.iconfinder.com/data/icons/fire-color/106/flaticon_30-128.png" /> Messages</Button>
            </Col>
            <Col sm={3}>
              <Button default block href="/progressBars"><img src="https://cdn1.iconfinder.com/data/icons/user-interface-44/48/Loading-128.png" /> Progress Bars</Button>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <Button default block href="/tabs"><img src="https://cdn1.iconfinder.com/data/icons/jetflat-multimedia-vol-2/90/004_109_browser_tabs_window_app_application-128.png" /> Tabs</Button>
            </Col>
            <Col sm={3}>
              <Button default block href="/stories"><img src="https://cdn1.iconfinder.com/data/icons/business-onomicons/512/business-05-128.png" /> Stories</Button>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <Button default block href="/charts"><img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/trends-128.png" /> Charts</Button>
            </Col>
            <Col sm={3}>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Demo;