import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';

export const Post = ({ title, body }) => (
  <div className="post">
    <h2 className="post__title">
      {title}
    </h2>
    <p>
      {body}
    </p>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
