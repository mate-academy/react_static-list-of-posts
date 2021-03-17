import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';

export const Post = ({ title, body }) => (
  <>
    <h2 className="post__title">{title}</h2>
    <p className="post__body">{body}</p>
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
