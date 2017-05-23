import React, { Component } from 'react';
import { Grid, Row, Col, Box, Overlay, Button, StarRating } from './../library';

class BoxDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  refresh() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500);
  }

  render() {
    console.log(this);
    return (
      <Grid>
        <br />
        <Row>
          <Col xs={12} sm={4}>
            <Box success>
              <Box.Header>Success Box</Box.Header>
              <Box.Content>
                <p className="text-default">
                  <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit. <span className="text-default text-muted">Proin molestie, ipsum id sagittis mattis, diam justo interdum dolor, a placerat est nulla eget eros. Fusce ac interdum nulla.</span> <a>Duis fermentum lectus posuere posuere feugiat</a>. Praesent eu fringilla dui. Curabitur faucibus tincidunt turpis, sed semper tellus dictum eu. Suspendisse ornare faucibus lorem, eget sagittis massa venenatis maximus.
            </p>
              <Button clean primary>Action</Button>
              </Box.Content>
              <Box.Footer>
                Some box footer goes here
              </Box.Footer>
            </Box>
          </Col>
          <Col xs={12} sm={4}>
            <Box info>
              <Box.Header>Info Box</Box.Header>
              <Box.Content>
                <p className="text-default">
                  <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit. <span className="text-default text-muted">Proin molestie, ipsum id sagittis mattis, diam justo interdum dolor, a placerat est nulla eget eros. Fusce ac interdum nulla.</span> <a>Duis fermentum lectus posuere posuere feugiat</a>. Praesent eu fringilla dui. Curabitur faucibus tincidunt turpis, sed semper tellus dictum eu. Suspendisse ornare faucibus lorem, eget sagittis massa venenatis maximus.
                </p>
              </Box.Content>
              <Box.Content>
                <p className="text-default">
                  <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit. <span className="text-default text-muted">Proin molestie, ipsum id sagittis mattis, diam justo interdum dolor, a placerat est nulla eget eros. Fusce ac interdum nulla.</span> <a>Duis fermentum lectus posuere posuere feugiat</a>. Praesent eu fringilla dui. Curabitur faucibus tincidunt turpis, sed semper tellus dictum eu. Suspendisse ornare faucibus lorem, eget sagittis massa venenatis maximus.
                </p>
              </Box.Content>
              <Box.Footer>
                Some box footer goes here
              </Box.Footer>
            </Box>
          </Col>
          <Col xs={12} sm={4}>
            <Box warning>
              <Box.Header>Warning Box</Box.Header>
              <Box.Content>
                <p className="text-default">
                  <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit. <span className="text-default text-muted">Proin molestie, ipsum id sagittis mattis, diam justo interdum dolor, a placerat est nulla eget eros. Fusce ac interdum nulla.</span> <a>Duis fermentum lectus posuere posuere feugiat</a>. Praesent eu fringilla dui. Curabitur faucibus tincidunt turpis, sed semper tellus dictum eu. Suspendisse ornare faucibus lorem, eget sagittis massa venenatis maximus.
            </p>
              </Box.Content>
              <Box.Footer>
                Some box footer goes here
              </Box.Footer>
            </Box>
          </Col>
          <Col xs={12} sm={4}>
            <Box danger>
              <Box.Header>Danger Box</Box.Header>
              <Box.Content>
                <p className="text-default">
                  <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit. <span className="text-default text-muted">Proin molestie, ipsum id sagittis mattis, diam justo interdum dolor, a placerat est nulla eget eros. Fusce ac interdum nulla.</span> <a>Duis fermentum lectus posuere posuere feugiat</a>. Praesent eu fringilla dui. Curabitur faucibus tincidunt turpis, sed semper tellus dictum eu. Suspendisse ornare faucibus lorem, eget sagittis massa venenatis maximus.
            </p>
              </Box.Content>
              <Box.Footer>
                Some box footer goes here
              </Box.Footer>
            </Box>
          </Col>
          <Col xs={12} sm={8}>
            <Box>
              <Box.Content>
                <p className="text-default">
                  <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit. <span className="text-default text-muted">Proin molestie, ipsum id sagittis mattis, diam justo interdum dolor, a placerat est nulla eget eros. Fusce ac interdum nulla.</span> <a>Duis fermentum lectus posuere posuere feugiat</a>. Praesent eu fringilla dui. Curabitur faucibus tincidunt turpis, sed semper tellus dictum eu. Suspendisse ornare faucibus lorem, eget sagittis massa venenatis maximus.
                </p>
              </Box.Content>
              <Box.Content>
                <p className="text-default">
                  <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit. <span className="text-default text-muted">Proin molestie, ipsum id sagittis mattis, diam justo interdum dolor, a placerat est nulla eget eros. Fusce ac interdum nulla.</span> <a>Duis fermentum lectus posuere posuere feugiat</a>. Praesent eu fringilla dui. Curabitur faucibus tincidunt turpis, sed semper tellus dictum eu. Suspendisse ornare faucibus lorem, eget sagittis massa venenatis maximus.
                </p>
              </Box.Content>
              <Box.Footer>
                <Row end="xs">
                  <Col xs={12}>
                    <StarRating color='#db504a' />
                  </Col>
                </Row>
              </Box.Footer>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={4}>
            <Box default link>
              <Box.Content>
                <Overlay inverted show={this.state.loading} />
                <p className="text-default">
                  <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit. <span className="text-default text-muted">Proin molestie, ipsum id sagittis mattis, diam justo interdum dolor, a placerat est nulla eget eros. Fusce ac interdum nulla.</span> <a>Duis fermentum lectus posuere posuere feugiat</a>. Praesent eu fringilla dui. Curabitur faucibus tincidunt turpis, sed semper tellus dictum eu. Suspendisse ornare faucibus lorem, eget sagittis massa venenatis maximus.
            </p>
              </Box.Content>
            </Box>
          </Col>
          <Col xs={12} sm={4}>
            <Box inverted>
              <Box.Header>Inverted Box</Box.Header>
              <Box.Content>
                <p className="text-default">
                  <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit. <span className="text-default text-muted">Proin molestie, ipsum id sagittis mattis, diam justo interdum dolor, a placerat est nulla eget eros. Fusce ac interdum nulla.</span> <a>Duis fermentum lectus posuere posuere feugiat</a>. Praesent eu fringilla dui. Curabitur faucibus tincidunt turpis, sed semper tellus dictum eu. Suspendisse ornare faucibus lorem, eget sagittis massa venenatis maximus.
            </p>
              </Box.Content>
              <Box.Footer>
                Some box footer goes here
              </Box.Footer>
            </Box>
          </Col>
          <Col xs={12} sm={4}>
            <Box primary>
              <Box.Header>
                <Row between="xs">
                  <Col xs={11}>Primary Box</Col>
                  <Col xs={1} className="text-right">
                    <i style={{padding:'5px'}} className={'fa fa-refresh ' + (this.state.loading?'rotating':'clickable')} onClick={() => this.state.loading ? null : this.refresh()} />
                  </Col>
                </Row>
              </Box.Header>
              <Box.Content>
                <Overlay inverted show={this.state.loading} />
                <p className="text-default">
                  <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit. <span className="text-default text-muted">Proin molestie, ipsum id sagittis mattis, diam justo interdum dolor, a placerat est nulla eget eros. Fusce ac interdum nulla.</span> <a>Duis fermentum lectus posuere posuere feugiat</a>. Praesent eu fringilla dui. Curabitur faucibus tincidunt turpis, sed semper tellus dictum eu. Suspendisse ornare faucibus lorem, eget sagittis massa venenatis maximus.
            </p>
              </Box.Content>
              <Box.Footer>
                Some box footer goes here
              </Box.Footer>
            </Box>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default BoxDemo;