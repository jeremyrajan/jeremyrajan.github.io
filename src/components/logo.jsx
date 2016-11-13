import React from 'react';

class Logo extends React.Component {
  render() {
    return (
      <div id="logo">
        <span>Jeremy Rajan</span> |
        <span> <i className="fa fa-heart" aria-hidden="true"></i> <span id="langs"> JS, Ruby, Go, HTML/CSS </span> </span>
      </div>
    );
  }
}

export default Logo;
