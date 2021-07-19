import React from 'react';
import propTypes from 'prop-types';

export const Post = ({ post }) => (
  <>
    <li className="title">{post.title}</li>
    <li className="body">{post.body}</li>
  </>
);

Post.propTypes = {
  post: propTypes.shape({
    title: propTypes.string.isRequired,
    body: propTypes.string.isRequired,
  }).isRequired,
};
