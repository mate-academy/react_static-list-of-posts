import React from 'react';
import propTypes from 'prop-types';

import './Post.css';

const Post = ({ post }) => (
  <div>
    <h2 className="post-title">{post.title}</h2>
    <p className="post-text">{post.body}</p>
  </div>
);

export default Post;

Post.propTypes = {
  post: propTypes.arrayOf(propTypes.string),
};
