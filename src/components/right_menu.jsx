import React from 'react';
const config = require('../config.json');

class NavItem extends React.Component {
  render() {
    const classes = `button ${this.props.class || ''}`;
    return (
      <li><a target={this.props.target} className={classes} href={this.props.link}>{this.props.name}</a></li>
    );
  }
}

class RightMenu extends React.Component {
  render() {
    const items = config.links.map((item, key) => <NavItem key={key} class={item.class} link={item.link} name={item.name} target={item.target} />);
    return (
      <ul id="right-menu">
        {items}
      </ul>
    );
  }
}

export default RightMenu;