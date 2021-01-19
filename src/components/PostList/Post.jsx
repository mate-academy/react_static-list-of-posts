import React from 'react';
import PropTypes from 'prop-types';

export const Post = ({ title, body }) => (
  <div className="post__content">
    <h1>{title}</h1>
    <p>{body}</p>
  </div>
);

Post.propTypes = {
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
