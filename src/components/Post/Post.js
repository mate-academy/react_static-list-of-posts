import React from 'react';
import PropTypes from 'prop-types';

export const Post = ({ post }) => (
  <>
    <h5>{post.title}</h5>
    <p>{post.body}</p>
  </>
);

Post.defaultProps = {
  post: {},
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }),
};
