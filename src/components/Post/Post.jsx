import React from 'react';
import PropTypes from 'prop-types';

export const Post = ({ title, body }) => (
  <>
    <h2>{title}</h2>
    <i>{body}</i>
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
