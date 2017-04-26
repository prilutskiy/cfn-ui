import React, { Component } from 'react';
import { Badge } from './../library';

class BadgeDemo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Badge removable>1</Badge>
          <Badge>2</Badge>
          <Badge disabled>3</Badge>
        </div>
        <div>
          <Badge primary  removable>4</Badge>
          <Badge primary >5</Badge>
          <Badge primary disabled>6</Badge>
        </div>
        <div>
          <Badge success removable>7</Badge>
          <Badge success>8</Badge>
          <Badge success disabled>9</Badge>
        </div>
        <div>
          <Badge info removable>10</Badge>
          <Badge info>11</Badge>
          <Badge info disabled>12</Badge>
        </div>
        <div>
          <Badge warning removable>13</Badge>
          <Badge warning>14</Badge>
          <Badge warning disabled>15</Badge>
        </div>
        <div>
          <Badge danger removable>16</Badge>
          <Badge danger>17</Badge>
          <Badge danger disabled>18</Badge>
        </div>
      </div>
    );
  }
}

export default BadgeDemo;