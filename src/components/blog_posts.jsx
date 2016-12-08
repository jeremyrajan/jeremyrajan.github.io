import React from 'react';
const config = require('../config.json');

const Post = (props) => (
  <li>
    <a target="_blank" href={props.link}>{props.name}</a>
  </li>
);

class BlogPosts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: config.posts
    }
  }

  render() {
    const posts = this.state.posts.map((p, key) => <Post link={p.link} key={key} name={p.name} />)
    return (
      <div id="blog-posts">
        <h1>Posts</h1>
        <ul>
          {posts}
        </ul>
      </div>
    )
  }
}

export default BlogPosts;
