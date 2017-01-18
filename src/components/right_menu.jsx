import React from 'react';
const config = require('../config.json');

class NavItem extends React.Component {
  render() {
    const classes = `button ${this.props.class || ''}`;
    return (
      <div className="nav-item">
        <a target={this.props.target} className={classes} href={this.props.link}>{this.props.name}</a>
      </div>
    );
  }
}

class RightMenu extends React.Component {
  render() {
    const items = config.links.map((item, key) => <NavItem key={key} class={item.class} link={item.link} name={item.name} target={item.target} />);
    return (
      <nav className="nav">
      <span className="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div className="nav-right nav-menu">
        {items}
      </div>
      </nav>
    );
  }
}

export default RightMenu;