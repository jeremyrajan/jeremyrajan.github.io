import React from 'react';
import Logo from './logo';
import RightMenu from './right_menu'

class TopBar extends React.Component {
  render() {
    return (
      <div>
        <Logo />
        <RightMenu />
        <div className="clear"></div>
      </div>
    );
  }
}

export default TopBar;
