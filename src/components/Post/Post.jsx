import React from 'react';
import PropTypes from 'prop-types';

import './Post.scss';

export const Post = ({ post }) => (
  <div className="post">
    <h3 className="post__title">{post.title}</h3>
    <p className="post__text">{post.body}</p>
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
