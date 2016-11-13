import React from 'react';
const config = require('../config.json');

import BlogPosts from './blog_posts';
import Projects from './projects';

const MyImage = () => (
  <span id="me">
    <img src={config.me} alt="jeremy rajan"/>
    <p>Full Stack Developer</p>
  </span>
);

class Content extends React.Component {
  render() {
    return (
      <div id="content">
        <MyImage />
        <hr/>
        <div className="clear"></div>
        <BlogPosts />
        <Projects />
        <div className="clear"></div>
      </div>
    );
  }
}

export default Content;