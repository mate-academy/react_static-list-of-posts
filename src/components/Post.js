import React from 'react';
import PropTypes from 'prop-types';

export const Post = ({ post }) => (
  <>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
  </>
);

export const PostShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}).isRequired;

Post.propTypes = {
  post: PostShape.isRequired,
};
