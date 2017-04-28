import React, { Component } from 'react';
import { Message } from './../library';

class MessageDemo extends Component {
  render() {
    return (
      <div className="page">
        <Message icon="ellipsis-h">
          <Message.Content>
            <h4>Default Message With Icon And No Extra Content</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          </Message.Content>
        </Message>
        <Message primary icon="check-circle-o">
          <Message.Content>
            <h4>Primary Message With Icon And Extra Content</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Message.Content>
          <Message.Extras>
            <br />
          <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie, ipsum id sagittis mattis, diam justo interdum dolor, a placerat est nulla eget eros. Fusce ac interdum nulla. Duis fermentum lectus posuere posuere feugiat. Praesent eu fringilla dui. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie, ipsum id sagittis mattis, diam justo interdum dolor, a placerat est nulla eget eros. Fusce ac interdum nulla. Duis fermentum lectus posuere posuere feugiat. Praesent eu fringilla dui. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie, ipsum id sagittis mattis, diam justo interdum dolor, a placerat est nulla eget eros. Fusce ac interdum nulla. Duis fermentum lectus posuere posuere feugiat. Praesent eu fringilla dui. 
          </p>
          </Message.Extras>
        </Message>
        <Message success icon="bullhorn">
          <Message.Content>
            <h4>Default Message With Icon And No Extra Content</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          </Message.Content>
        </Message>
        <Message info icon="info">
          <Message.Content>
            <h4>Default Message With Icon And No Extra Content</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          </Message.Content>
        </Message>
        <Message warning icon="exclamation-triangle">
          <Message.Content>
            <h4>Default Message With Icon And No Extra Content</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          </Message.Content>
        </Message>
        <Message danger icon="times">
          <Message.Content>
            <h4>Default Message With Icon And No Extra Content</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          </Message.Content>
        </Message>
      </div>
    );
  }
}

export default MessageDemo;