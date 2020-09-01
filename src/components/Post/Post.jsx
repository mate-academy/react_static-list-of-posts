import React from 'react';
import './Post.scss';
import PropTypes from 'prop-types';

export const Post = ({ title, body }) => (
  <>
    <h3 className="post__title">{title}</h3>
    <p className="post__body">{body}</p>
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
